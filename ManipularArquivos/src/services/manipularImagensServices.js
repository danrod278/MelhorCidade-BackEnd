const {v4: uuidv4} = require("uuid")
const path = require("path")
const fs = require("fs")

exports.salvarImagem = async (res, arrayImagens)=>{
    try{
        let arrayCaminhos = []
        let arrayErros = []
        for(const element of arrayImagens){
            var mimetype = element.mimetype
            mimetype = mimetype.split('/')
            var typeImage = element.originalname
            typeImage = typeImage.split('.')

            if(mimetype[0]!="image"){
                arrayErros.push(element.originalname)
                continue
            }
            else{
                const pathName = uuidv4()
                const filePath = path.join(__dirname, "..", "imagens", `${pathName}.${typeImage[1]}`)
                const bufferData = Buffer.from(element.buffer.data);
                const statusWriteFileAsync = await writeFileAsync(filePath, bufferData)
                
                if(statusWriteFileAsync){
                    arrayCaminhos.push({Caminho:filePath})
                }else{
                    arrayErros.push(element.originalname)
                    console.error("Não foi possivel salvar as images")
                }
            }   
        }
        res.json({arrayCaminhos, arrayErros, acess:true})
    }catch(err){
        console.error("Erro ao salvar a imagem "+err)
        res.json({mensagem:"Erro ao salvar a imagem", erro:err, acess:false})
    }
}

exports.lerImagens = async(res, arrayCaminhos)=>{
    try {
        let arrayBuffers = []
        let arrayCaminhosErros = []
        for (i=0;i<arrayCaminhos.length;i++){
            try {
                var buffer = await readFileAsync(arrayCaminhos[i].Caminho)
                arrayBuffers.push(buffer)  

            } catch (error) {
                arrayCaminhosErros.push(arrayCaminhos[i])
            }            
        }
        console.log(arrayBuffers)
        res.json({arrayBuffers:arrayBuffers, arrayCaminhosErros:arrayCaminhosErros, acess:true})
    } catch (err) {
        console.error("Erro ao ler array de imagens", err)
        res.json({mensagem:"Erro ao ler array de imagens", erro:err})
    }
}

async function writeFileAsync (filePath, buffer){
    return new Promise((resolve, reject)=>{
        fs.writeFile(filePath, buffer, (err, data)=>{
            if(err){
                console.error('Erro ao escrever arquivo '+err)
                reject(err)
            }
            resolve(true)
        })
    })
}

async function readFileAsync(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (err, data)=>{
            if(err){
                console.error("Erro ao ler arquivo", err)
                reject(err)
            }
            resolve(data)
        })
    })
}
