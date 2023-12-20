const { URL } = require("../model/url.model");
const crypto = require("crypto");

const genarateUrl = (originalUrl) =>{
  const hash = crypto.createHash("md5").update(originalUrl).digest("Hex");

  const shortUrl = hash.substring(0, 7);
  return shortUrl;
}

const shortenUrl = async (req,res)=>{
  try {
    const {fullUrl} = req.body

    const isUrlPresent = await URL.findOne({fullUrl})

    if(isUrlPresent){
      return res.status(400).json({message:"URL already present",fullUrl: fullUrl, shortUrl:isUrlPresent.shortUrl, isOk:false})
    }

    let shortUrlgen ;
    while(true){
      shortUrlgen = genarateUrl(fullUrl);
      const checkDublicate = await URL.findOne({shortUrlgen})
      if(!checkDublicate){
        break;
      }
    }

    const new_url = new URL({fullUrl:fullUrl, shortUrl:shortUrlgen});

    await new_url.save();

    return res.status(200).json({message:"URL Shorten Successfully",fullUrl: fullUrl, shortUrl:shortUrlgen, isOk:true})
  } catch (error) {
    res.status(400).json({message:error.message, isOk:false})
  }
}


const checkUrl = async(req,res)=>{
  try {
    const {shortUrl} = req.params;

    const isShortUrlPresent = await URL.findOne({shortUrl});

    if(!isShortUrlPresent){
      return res.status(404).json({ msg: "Short URL not found" });
    }

    res.redirect(isShortUrlPresent.fullUrl)

  } catch (error) {
    res.status(400).json({message:error.message, isOk:false})
  }
}

module.exports = { genarateUrl , shortenUrl, checkUrl};
