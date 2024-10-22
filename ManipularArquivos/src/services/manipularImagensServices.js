const {v4: uuidv4} = require("uuid")
const path = require("path")
const fs = require("fs")

exports.salvarImagem = async (req, res, arrayImagens)=>{
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
                console.log(element.buffer.data)
                const bufferData = Buffer.from(element.buffer.data);
                const statusWriteFileAsync = await writeFileAsync(filePath, bufferData)
                
                if(statusWriteFileAsync){
                    arrayCaminhos.push({Caminho:filePath})
                }else{
                    console.error("Não foi possivel salvar as images")
                }
            }   
        }
        res.json({arrayCaminhos, arrayErros})
    }catch(err){
        console.log("Erro ao salvar a imagem "+err)
        res.json({mensagem:"Erro ao salvar a imagem", erro:err, acess:false})
    }
}

async function writeFileAsync (filePath, buffer){
    return new Promise((resolve, reject)=>{
        fs.writeFile(filePath, buffer, (err, data)=>{
            if(err){
                console.error('Error while writing a file '+err)
                reject(err)
            }
            resolve(true)
        })
    })
}
