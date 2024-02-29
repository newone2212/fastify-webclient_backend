const Youtube_Details = require("../models/yotubeModels");
require('dotenv').config();
const axios=require("axios");

async function getVedioDetails(req, res) {
  try {
    
    console.log(url)
    const ala=process.env.RapidKey
    console.log(ala)

    const config = {
      headers: {
        'X-RapidAPI-Key': '9544bfc62dmshc1be9a8c1689638p1fcc52jsne76d551a193c',
        'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.coms'
      }
    };
    const userData = await axios.get(
      `https://youtube-media-downloader.p.rapidapi.com/v2/search/videos?keyword=parth`, config).then((data)=>{
        console.log(data)
      })
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

 function getChannelDetails(req, res) {
  
  const keyword = req.body.url;
  console.log(keyword)
  const register=new Youtube_Details({
    name:keyword
  }); 
  console.log(register);
  register.save().then(()=>{
    res.status(201).send(register);
  }).catch((error)=>{
    res.send(error)
  })
    // console.log("hii")
    // const keyword = req.body.url;
    // console.log(process.env.RapidKey)
    // const config = {
    //   headers: {
    //     'X-RapidAPI-Key': process.env.RapidKey,
    //     'X-RapidAPI-Host': process.env.RapidHost
    //   }
    // };
    // const userData = await axios.get(
    //   `https://youtube-media-downloader.p.rapidapi.com/v2/search/channels?keyword=${keyword}`, config)
    //   .then((userData) => {
    //     res.status(201).send(userData)
    //   }).catch((error) => {
    //     res.status(400).send("Please see the Information...")
    //   })
  
}


async function getPlaylistDetailDetails(req, res) {
  try {
    const keyword = req.body.url;

    const config = {
      headers: {
        'X-RapidAPI-Key': process.env.RapidKey,
        'X-RapidAPI-Host': process.env.RapidHost
      }
    };
    const userData = await axios.get(
      `https://youtube-media-downloader.p.rapidapi.com/v2/search/playlists?keyword=${keyword}`, config)
      .then((userData) => {
        res.status(201).send(userData)
      }).catch((error) => {
        res.status(400).send("Please see the Information...")
      })
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}


module.exports = {
  getPlaylistDetailDetails,
  getVedioDetails,
  getChannelDetails

};
