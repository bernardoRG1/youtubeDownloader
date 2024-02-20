import  searchVideo  from "../Models/searchModel.js";

const model = new searchVideo()

export const searchPOST = async (req, res) => {
   const {url} = req.body;
   const data = await model.getData(url);
   const token =  req.cookies.token;
   // Verificar si el usuario está autenticado
   // Renderizar la plantilla home y pasar el estado de autenticación

   try {
      if(data) {
         if(token) {
            res.render('search' , {titulo: data.title, frame : data.iframeUrl, duration: data.duration, link:url , isAuthenticated: true});
         } else {
            res.render('search' , {titulo: data.title, frame : data.iframeUrl, duration: data.duration, link:url });
         }
      } else {
         throw new Error('No es un enlace valido')
      }
   } catch (error) {
      res.render('home', {error : error})
   }

}

export const downloadPOST = async (req, res) => {
   const { type, link } = req.body;
   try {
      /*
      const download = await model.gettDownload(link, type)
      res.render('download')
      */
      throw new Error("error")
      
   } catch (error) {
      res.render('download', {error: true, message : "ERROR AL DESCARGAR"})
   }
}