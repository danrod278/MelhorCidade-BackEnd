const {v4: uuidv4} = require("uuid")
const { createClient } = require('@supabase/supabase-js')
const path = require("path")

const {dotenvVariables} = require("../../dotenvVariables")

exports.salvarImagem = async (res, arrayImagens)=>{
    try{
        const supabaseUrl = dotenvVariables.SUPABASEURL
        const supabaseKey = dotenvVariables.SUPABASE_KEY

        const supabase = createClient(supabaseUrl, supabaseKey)
        const bucketName = 'Imagens'
        const arrayCaminhos = []
        const arrayErros = []

        for(var element of arrayImagens){
            //console.log(element)
            let buffer = Buffer.from(element.buffer)
            let typeFile = element.mimetype
            typeFile = typeFile.split('/')
            if(typeFile[0]=="image"){
                var pathName = uuidv4()+"."+typeFile[1]
                
                const {data, error} = supabase.storage.from(bucketName).upload(pathName, buffer, {contentType:element.mimetype, upsert:true})
                if (error) {
                    console.error('Erro ao obter URL pública:', error.message)
                    arrayErros.push(error.message)
                } else {
                    let {error:urlErro, data:urlData} = supabase.storage.from(bucketName).getPublicUrl(pathName)
                    arrayCaminhos.push(urlData)
                    if(urlErro){
                        console.log(urlErro, element)
                        arrayErros.push(urlErro)
                    }
                }
            }else{
                arrayErros.push(element.originalname)
                continue
            }
        }

        res.json({arrayCaminhos:arrayCaminhos, arrayErros:arrayErros, acess:true})

    }catch(err){
        console.error("Erro ao salvar a imagem "+err)
        res.json({mensagem:"Erro ao salvar a imagem", erro:err, acess:false})
    }
}
