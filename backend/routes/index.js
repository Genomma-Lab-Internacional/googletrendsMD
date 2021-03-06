const express = require('express');
const router  = express.Router();
const connection = require("../constants/connection")
const googleTrends = require("google-trends-api")
const weekNumber = require("current-week-number")
const Competencia = require("../constants/Competencia")
const MrcNombre = require("../constants/MrcNombre")
const Necesidades = require("../constants/Necesidades")

/*MARCAS*/
// const MrcNombre0 = require("../constants/MrcNombre0")
// const MrcNombre1 = require("../constants/MrcNombre1")
// const MrcNombre2 = require("../constants/MrcNombre2")
// const MrcNombre3 = require("../constants/MrcNombre3")
// const MrcNombre4 = require("../constants/MrcNombre4")
// const MrcNombre5 = require("../constants/MrcNombre5")
// const MrcNombre6 = require("../constants/MrcNombre6")
// const MrcNombre7 = require("../constants/MrcNombre7")
// const MrcNombre8 = require("../constants/MrcNombre8")
// const MrcNombre9 = require("../constants/MrcNombre9")
// const MrcNombre10 = require("../constants/MrcNombre10")
// const MrcNombre11 = require("../constants/MrcNombre11")
// const MrcNombre12 = require("../constants/MrcNombre12")
/*MARCAS*/

const LinNombre = require("../constants/LinNombre")
const ProNombre = require ("../constants/ProNombre")

/*NECESIDADES*/
// const Necesidades0 = require("../constants/Necesidades0")
// const Necesidades1 = require("../constants/Necesidades1")
// const Necesidades2 = require("../constants/Necesidades2")
// const Necesidades3 = require("../constants/Necesidades3")
// const Necesidades4 = require("../constants/Necesidades4")
// const Necesidades5 = require("../constants/Necesidades5")
// const Necesidades6 = require("../constants/Necesidades6")
// const Necesidades7 = require("../constants/Necesidades7")
// const Necesidades8 = require("../constants/Necesidades8")
// const Necesidades9 = require("../constants/Necesidades9")
// const Necesidades10 = require("../constants/Necesidades10")
// const Necesidades11 = require("../constants/Necesidades11")
// const Necesidades12 = require("../constants/Necesidades12")
// const Necesidades13 = require("../constants/Necesidades13")
// const Necesidades14 = require("../constants/Necesidades14")
// const Necesidades15 = require("../constants/Necesidades15")
// const Necesidades16 = require("../constants/Necesidades16")
// const Necesidades17 = require("../constants/Necesidades17")
// const Necesidades18 = require("../constants/Necesidades18")
// const Necesidades19 = require("../constants/Necesidades19")
// const Necesidades20 = require("../constants/Necesidades20")
// const Necesidades21 = require("../constants/Necesidades21")
// const Necesidades22 = require("../constants/Necesidades22")
// const Necesidades23 = require("../constants/Necesidades23")
// const Necesidades24 = require("../constants/Necesidades24")
// const Necesidades25 = require("../constants/Necesidades25")
// const Necesidades26 = require("../constants/Necesidades26")
// const Necesidades27 = require("../constants/Necesidades27")
// const Necesidades28 = require("../constants/Necesidades28")
// const Necesidades29 = require("../constants/Necesidades29")
// const Necesidades30 = require("../constants/Necesidades30")
// const Necesidades31 = require("../constants/Necesidades31")
// const Necesidades32 = require("../constants/Necesidades32")
// const Necesidades33 = require("../constants/Necesidades33")
// const Necesidades34 = require("../constants/Necesidades34")
// const Necesidades35 = require("../constants/Necesidades35")
/*NECESIDADES*/


/****MARCA POR REGION*****/
router.get("/interestbyregion/mrcnombre0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false
  
  async function mrcnombre0() {
    for(let i=0; i<MrcNombre.MrcNombre0.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre0[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre0[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre0()
})


router.get("/interestbyregion/mrcnombre1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre1() {
    for(let i=0; i<MrcNombre.MrcNombre1.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre1[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre1[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre1()
})


router.get("/interestbyregion/mrcnombre2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre2() {
    for(let i=0; i<MrcNombre.MrcNombre2.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre2[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre2[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre2()
})


router.get("/interestbyregion/mrcnombre3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre3() {
    for(let i=0; i<MrcNombre.MrcNombre3.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre3[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre3[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre3()
})


router.get("/interestbyregion/mrcnombre4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre4() {
    for(let i=0; i<MrcNombre.MrcNombre4.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre4[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre4[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre4()
})


router.get("/interestbyregion/mrcnombre5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre5() {
    for(let i=0; i<MrcNombre.MrcNombre5.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre5[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre5[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre5()
})


router.get("/interestbyregion/mrcnombre6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre6() {
    for(let i=0; i<MrcNombre.MrcNombre6.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre6[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre6[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre6()
})


router.get("/interestbyregion/mrcnombre7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre7() {
    for(let i=0; i<MrcNombre.MrcNombre7.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre7[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre7[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre7()
})


router.get("/interestbyregion/mrcnombre8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre8() {
    for(let i=0; i<MrcNombre.MrcNombre8.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre8[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre8[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre8()
})


router.get("/interestbyregion/mrcnombre9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre9() {
    for(let i=0; i<MrcNombre.MrcNombre9.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre9[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre9[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre9()
})


router.get("/interestbyregion/mrcnombre10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre10() {
    for(let i=0; i<MrcNombre.MrcNombre10.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre10[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre10[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre10()
})


router.get("/interestbyregion/mrcnombre11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre11() {
    for(let i=0; i<MrcNombre.MrcNombre11.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre11[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre11[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre11()
})


router.get("/interestbyregion/mrcnombre12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre12() {
    for(let i=0; i<MrcNombre.MrcNombre12.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre12[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre12[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre12()
})
/****MARCA POR REGION*****/

/****MARCA POR CTIY*****/
router.get("/interestbycity/mrcnombre0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre0() {
    for(let i=0; i<MrcNombre.MrcNombre0.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre0[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre0[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre0()
})


router.get("/interestbycity/mrcnombre1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre1() {
    for(let i=0; i<MrcNombre.MrcNombre1.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre1[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre1[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre1()
})


router.get("/interestbycity/mrcnombre2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre2() {
    for(let i=0; i<MrcNombre.MrcNombre2.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre2[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre2[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre2()
})


router.get("/interestbycity/mrcnombre3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre3() {
    for(let i=0; i<MrcNombre.MrcNombre3.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre3[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre3[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre3()
})


router.get("/interestbycity/mrcnombre4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre4() {
    for(let i=0; i<MrcNombre.MrcNombre4.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre4[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre4[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre4()
})

router.get("/interestbycity/mrcnombre5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre5() {
    for(let i=0; i<MrcNombre.MrcNombre5.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre5[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre5[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre5()
})

router.get("/interestbycity/mrcnombre6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre6() {
    for(let i=0; i<MrcNombre.MrcNombre6.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre6[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre6[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre6()
})

router.get("/interestbycity/mrcnombre7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre7() {
    for(let i=0; i<MrcNombre.MrcNombre7.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre7[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre7[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre7()
})

router.get("/interestbycity/mrcnombre8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre8() {
    for(let i=0; i<MrcNombre.MrcNombre8.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre8[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre8[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre8()
})

router.get("/interestbycity/mrcnombre9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre9() {
    for(let i=0; i<MrcNombre.MrcNombre9.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre9[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre9[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre9()
})

router.get("/interestbycity/mrcnombre10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre10() {
    for(let i=0; i<MrcNombre.MrcNombre10.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre10[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre10[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre10()
})

router.get("/interestbycity/mrcnombre11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre11() {
    for(let i=0; i<MrcNombre.MrcNombre11.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre11[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre11[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre11()
})

router.get("/interestbycity/mrcnombre12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre12() {
    for(let i=0; i<MrcNombre.MrcNombre12.length; i++) {
      googleTrends.interestByRegion({keyword:MrcNombre.MrcNombre12[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadMarca (Ciudad,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${MrcNombre.MrcNombre12[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre12()
})
/****MARCA POR CTIY*****/



/****NECESIDADES POR REGION*****/
router.get("/interestbyregion/necesidad0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad0() {
    for(let i=0; i<Necesidades.Necesidades0.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades0[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades0[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad0()
})

router.get("/interestbyregion/necesidad1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad1() {
    for(let i=0; i<Necesidades.Necesidades1.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades1[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades1[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad1()
})

router.get("/interestbyregion/necesidad2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad2() {
    for(let i=0; i<Necesidades.Necesidades2.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades2[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades2[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad2()
})

router.get("/interestbyregion/necesidad3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad3() {
    for(let i=0; i<Necesidades.Necesidades3.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades3[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades3[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad3()
})

router.get("/interestbyregion/necesidad4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad4() {
    for(let i=0; i<Necesidades.Necesidades4.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades4[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades4[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad4()
})

router.get("/interestbyregion/necesidad5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad5() {
    for(let i=0; i<Necesidades.Necesidades5.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades5[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades5[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad5()
})

router.get("/interestbyregion/necesidad6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad6() {
    for(let i=0; i<Necesidades.Necesidades6.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades6[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades6[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad6()
})

router.get("/interestbyregion/necesidad7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad7() {
    for(let i=0; i<Necesidades.Necesidades7.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades7[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades7[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad7()
})

router.get("/interestbyregion/necesidad8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad8() {
    for(let i=0; i<Necesidades.Necesidades8.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades8[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades8[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad8()
})

router.get("/interestbyregion/necesidad9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad9() {
    for(let i=0; i<Necesidades.Necesidades9.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades9[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades9[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad9()
})


router.get("/interestbyregion/necesidad10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad10() {
    for(let i=0; i<Necesidades.Necesidades10.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades10[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades10[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad10()
})


router.get("/interestbyregion/necesidad11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad11() {
    for(let i=0; i<Necesidades.Necesidades11.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades11[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades11[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad11()
})


router.get("/interestbyregion/necesidad12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad12() {
    for(let i=0; i<Necesidades.Necesidades12.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades12[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades12[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad12()
})


router.get("/interestbyregion/necesidad13",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad13() {
    for(let i=0; i<Necesidades.Necesidades13.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades13[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades13[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad13()
})


router.get("/interestbyregion/necesidad14",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad14() {
    for(let i=0; i<Necesidades.Necesidades14.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades14[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades14[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad14()
})


router.get("/interestbyregion/necesidad15",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad15() {
    for(let i=0; i<Necesidades.Necesidades15.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades15[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades15[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad15()
})


router.get("/interestbyregion/necesidad16",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad16() {
    for(let i=0; i<Necesidades.Necesidades16.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades16[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades16[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad16()
})


router.get("/interestbyregion/necesidad17",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad17() {
    for(let i=0; i<Necesidades.Necesidades17.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades17[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades17[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad17()
})


router.get("/interestbyregion/necesidad18",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad18() {
    for(let i=0; i<Necesidades.Necesidades18.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades18[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades18[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad18()
})


router.get("/interestbyregion/necesidad19",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad19() {
    for(let i=0; i<Necesidades.Necesidades19.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades19[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades19[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad19()
})


router.get("/interestbyregion/necesidad20",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad20() {
    for(let i=0; i<Necesidades.Necesidades20.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades20[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades20[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad20()
})


router.get("/interestbyregion/necesidad21",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad21() {
    for(let i=0; i<Necesidades.Necesidades21.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades21[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades21[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad21()
})


router.get("/interestbyregion/necesidad22",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad22() {
    for(let i=0; i<Necesidades.Necesidades22.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades22[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades22[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad22()
})


router.get("/interestbyregion/necesidad23",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad23() {
    for(let i=0; i<Necesidades.Necesidades23.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades23[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades23[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad23()
})


router.get("/interestbyregion/necesidad24",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad24() {
    for(let i=0; i<Necesidades.Necesidades24.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades24[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades24[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad24()
})


router.get("/interestbyregion/necesidad25",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad25() {
    for(let i=0; i<Necesidades.Necesidades25.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades25[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades25[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad25()
})


router.get("/interestbyregion/necesidad26",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad26() {
    for(let i=0; i<Necesidades.Necesidades26.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades26[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades26[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad26()
})


router.get("/interestbyregion/necesidad27",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad27() {
    for(let i=0; i<Necesidades.Necesidades27.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades27[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades27[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad27()
})


router.get("/interestbyregion/necesidad28",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad28() {
    for(let i=0; i<Necesidades.Necesidades28.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades28[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades28[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad28()
})


router.get("/interestbyregion/necesidad29",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad29() {
    for(let i=0; i<Necesidades.Necesidades29.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades29[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades29[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad29()
})


router.get("/interestbyregion/necesidad30",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad30() {
    for(let i=0; i<Necesidades.Necesidades30.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades30[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades30[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad30()
})


router.get("/interestbyregion/necesidad31",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad31() {
    for(let i=0; i<Necesidades.Necesidades31.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades31[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades31[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad31()
})


router.get("/interestbyregion/necesidad32",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad32() {
    for(let i=0; i<Necesidades.Necesidades32.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades32[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades32[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad32()
})


router.get("/interestbyregion/necesidad33",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad33() {
    for(let i=0; i<Necesidades.Necesidades33.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades33[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades33[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad33()
})


router.get("/interestbyregion/necesidad34",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad34() {
    for(let i=0; i<Necesidades.Necesidades34.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades34[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades34[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad34()
})


router.get("/interestbyregion/necesidad35",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad35() {
    for(let i=0; i<Necesidades.Necesidades35.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades35[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorEstadoNecesidad (Estado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades35[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad35()
})
/****NECESIDADES POR REGION*****/


/****NECESIDADES POR CITY*****/
router.get("/interestbycity/necesidad0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad0() {
    for(let i=0; i<Necesidades.Necesidades0.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades0[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades0[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad0()
})


router.get("/interestbycity/necesidad1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad1() {
    for(let i=0; i<Necesidades.Necesidades1.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades1[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades1[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad1()
})


router.get("/interestbycity/necesidad2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad2() {
    for(let i=0; i<Necesidades.Necesidades2.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades2[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades2[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad2()
})


router.get("/interestbycity/necesidad3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad3() {
    for(let i=0; i<Necesidades.Necesidades3.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades3[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades3[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad3()
})


router.get("/interestbycity/necesidad4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad4() {
    for(let i=0; i<Necesidades.Necesidades4.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades4[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades4[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad4()
})


router.get("/interestbycity/necesidad5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad5() {
    for(let i=0; i<Necesidades.Necesidades5.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades5[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades5[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad5()
})


router.get("/interestbycity/necesidad6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad6() {
    for(let i=0; i<Necesidades.Necesidades6.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades6[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades6[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad6()
})


router.get("/interestbycity/necesidad7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad7() {
    for(let i=0; i<Necesidades.Necesidades7.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades7[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades7[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad7()
})


router.get("/interestbycity/necesidad8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad8() {
    for(let i=0; i<Necesidades.Necesidades8.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades8[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades8[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad8()
})


router.get("/interestbycity/necesidad9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad9() {
    for(let i=0; i<Necesidades.Necesidades9.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades9[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades9[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad9()
})


router.get("/interestbycity/necesidad10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad10() {
    for(let i=0; i<Necesidades.Necesidades10.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades10[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades10[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad10()
})


router.get("/interestbycity/necesidad11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad11() {
    for(let i=0; i<Necesidades.Necesidades11.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades11[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades11[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad11()
})


router.get("/interestbycity/necesidad12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad12() {
    for(let i=0; i<Necesidades.Necesidades12.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades12[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades12[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad12()
})


router.get("/interestbycity/necesidad13",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad13() {
    for(let i=0; i<Necesidades.Necesidades13.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades13[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades13[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad13()
})


router.get("/interestbycity/necesidad14",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad14() {
    for(let i=0; i<Necesidades.Necesidades14.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades14[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades14[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad14()
})


router.get("/interestbycity/necesidad15",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad15() {
    for(let i=0; i<Necesidades.Necesidades15.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades15[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades15[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad15()
})


router.get("/interestbycity/necesidad16",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad16() {
    for(let i=0; i<Necesidades.Necesidades16.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades16[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades16[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad16()
})


router.get("/interestbycity/necesidad17",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad17() {
    for(let i=0; i<Necesidades.Necesidades17.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades17[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades17[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad17()
})


router.get("/interestbycity/necesidad18",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad18() {
    for(let i=0; i<Necesidades.Necesidades18.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades18[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades18[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad18()
})


router.get("/interestbycity/necesidad19",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad19() {
    for(let i=0; i<Necesidades.Necesidades19.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades19[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades19[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad19()
})


router.get("/interestbycity/necesidad20",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad20() {
    for(let i=0; i<Necesidades.Necesidades20.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades20[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades20[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad20()
})


router.get("/interestbycity/necesidad21",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad21() {
    for(let i=0; i<Necesidades.Necesidades21.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades21[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades21[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad21()
})


router.get("/interestbycity/necesidad22",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad22() {
    for(let i=0; i<Necesidades.Necesidades22.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades22[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades22[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad22()
})


router.get("/interestbycity/necesidad23",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad23() {
    for(let i=0; i<Necesidades.Necesidades23.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades23[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades23[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad23()
})


router.get("/interestbycity/necesidad24",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad24() {
    for(let i=0; i<Necesidades.Necesidades24.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades24[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades24[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad24()
})


router.get("/interestbycity/necesidad25",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad25() {
    for(let i=0; i<Necesidades.Necesidades25.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades25[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades25[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad25()
})


router.get("/interestbycity/necesidad26",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad26() {
    for(let i=0; i<Necesidades.Necesidades26.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades26[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades26[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad26()
})


router.get("/interestbycity/necesidad27",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad27() {
    for(let i=0; i<Necesidades.Necesidades27.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades27[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades27[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad27()
})


router.get("/interestbycity/necesidad28",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad28() {
    for(let i=0; i<Necesidades.Necesidades28.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades28[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades28[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad28()
})


router.get("/interestbycity/necesidad29",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad29() {
    for(let i=0; i<Necesidades.Necesidades29.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades29[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades29[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad29()
})


router.get("/interestbycity/necesidad30",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad30() {
    for(let i=0; i<Necesidades.Necesidades30.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades30[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades30[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad30()
})


router.get("/interestbycity/necesidad31",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad31() {
    for(let i=0; i<Necesidades.Necesidades31.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades31[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades31[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad31()
})


router.get("/interestbycity/necesidad32",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad32() {
    for(let i=0; i<Necesidades.Necesidades32.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades32[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades32[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad32()
})


router.get("/interestbycity/necesidad33",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad33() {
    for(let i=0; i<Necesidades.Necesidades33.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades33[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades33[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad33()
})



router.get("/interestbycity/necesidad34",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad34() {
    for(let i=0; i<Necesidades.Necesidades34.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades34[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades34[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad34()
})


router.get("/interestbycity/necesidad35",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad35() {
    for(let i=0; i<Necesidades.Necesidades35.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades35[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadNecesidad (Ciudad,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Necesidades.Necesidades35[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad35()
})
/****NECESIDADES POR CITY*****/


/****MARCA RELATED QUERIES*****/
router.get("/relatedqueries/mrcnombre0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre0() {
    for(let i=0; i<MrcNombre.MrcNombre0.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre0[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre0()
})


router.get("/relatedqueries/mrcnombre1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre1() {
    for(let i=0; i<MrcNombre.MrcNombre1.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre1[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre1()
})


router.get("/relatedqueries/mrcnombre2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre2() {
    for(let i=0; i<MrcNombre.MrcNombre2.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre2[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre2()
})

router.get("/relatedqueries/mrcnombre3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre3() {
    for(let i=0; i<MrcNombre.MrcNombre3.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre3[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre3()
})

router.get("/relatedqueries/mrcnombre4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre4() {
    for(let i=0; i<MrcNombre.MrcNombre4.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre4[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre4()
})

router.get("/relatedqueries/mrcnombre5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre5() {
    for(let i=0; i<MrcNombre.MrcNombre5.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre5[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre5()
})

router.get("/relatedqueries/mrcnombre6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre6() {
    for(let i=0; i<MrcNombre.MrcNombre6.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre6[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre6()
})

router.get("/relatedqueries/mrcnombre7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre7() {
    for(let i=0; i<MrcNombre.MrcNombre7.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre7[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre7[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre7()
})


router.get("/relatedqueries/mrcnombre8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre8() {
    for(let i=0; i<MrcNombre.MrcNombre8.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre8[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre8[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre8()
})

router.get("/relatedqueries/mrcnombre9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre9() {
    for(let i=0; i<MrcNombre.MrcNombre9.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre9[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre9[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre9()
})

router.get("/relatedqueries/mrcnombre10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre10() {
    for(let i=0; i<MrcNombre.MrcNombre10.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre10[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre10[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre10()
})

router.get("/relatedqueries/mrcnombre11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre11() {
    for(let i=0; i<MrcNombre.MrcNombre11.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre11[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre11[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre11()
})

router.get("/relatedqueries/mrcnombre12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre12() {
    for(let i=0; i<MrcNombre.MrcNombre12.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre12[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre12[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre12()
})

/****MARCA RELATED QUERIES*****/



/*****NECESIDAD RELATED QUERIES *****/
router.get("/relatedqueries/necesidades0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades0() {
    for(let i=0; i<Necesidades.Necesidades0.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades0[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades0()
})


router.get("/relatedqueries/necesidades1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades1() {
    for(let i=0; i<Necesidades.Necesidades1.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades1[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades1()
})


router.get("/relatedqueries/necesidades2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades2() {
    for(let i=0; i<Necesidades.Necesidades2.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades2[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades2()
})


router.get("/relatedqueries/necesidades3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades3() {
    for(let i=0; i<Necesidades.Necesidades3.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades3[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades3()
})


router.get("/relatedqueries/necesidades4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades4() {
    for(let i=0; i<Necesidades.Necesidades4.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades4[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades4()
})


router.get("/relatedqueries/necesidades5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades5() {
    for(let i=0; i<Necesidades.Necesidades5.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades5[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades5()
})


router.get("/relatedqueries/necesidades6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades6() {
    for(let i=0; i<Necesidades.Necesidades6.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades6[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades6()
})


router.get("/relatedqueries/necesidades7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades7() {
    for(let i=0; i<Necesidades.Necesidades7.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades7[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades7[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades7()
})


router.get("/relatedqueries/necesidades8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades8() {
    for(let i=0; i<Necesidades.Necesidades8.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades8[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades8[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades8()
})


router.get("/relatedqueries/necesidades9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades9() {
    for(let i=0; i<Necesidades.Necesidades9.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades9[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades9[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades9()
})


router.get("/relatedqueries/necesidades10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades10() {
    for(let i=0; i<Necesidades.Necesidades10.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades10[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades10[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades10()
})


router.get("/relatedqueries/necesidades11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades11() {
    for(let i=0; i<Necesidades.Necesidades11.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades11[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades11[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades11()
})


router.get("/relatedqueries/necesidades12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades12() {
    for(let i=0; i<Necesidades.Necesidades12.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades12[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades12[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades12()
})


router.get("/relatedqueries/necesidades13",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades13() {
    for(let i=0; i<Necesidades.Necesidades13.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades13[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades13[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades13()
})


router.get("/relatedqueries/necesidades14",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades14() {
    for(let i=0; i<Necesidades.Necesidades14.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades14[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades14[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades14()
})


router.get("/relatedqueries/necesidades15",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades15() {
    for(let i=0; i<Necesidades.Necesidades15.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades15[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades15[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades15()
})


router.get("/relatedqueries/necesidades16",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades16() {
    for(let i=0; i<Necesidades.Necesidades16.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades16[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades16[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades16()
})


router.get("/relatedqueries/necesidades17",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades17() {
    for(let i=0; i<Necesidades.Necesidades17.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades17[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades17[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades17()
})


router.get("/relatedqueries/necesidades18",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades18() {
    for(let i=0; i<Necesidades.Necesidades18.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades18[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades18[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades18()
})


router.get("/relatedqueries/necesidades19",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades19() {
    for(let i=0; i<Necesidades.Necesidades19.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades19[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades19[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades19()
})


router.get("/relatedqueries/necesidades20",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades20() {
    for(let i=0; i<Necesidades.Necesidades20.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades20[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades20[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades20()
})


router.get("/relatedqueries/necesidades21",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades21() {
    for(let i=0; i<Necesidades.Necesidades21.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades21[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades21[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades21()
})


router.get("/relatedqueries/necesidades22",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades22() {
    for(let i=0; i<Necesidades.Necesidades22.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades22[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades22[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades22()
})


router.get("/relatedqueries/necesidades23",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades23() {
    for(let i=0; i<Necesidades.Necesidades23.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades23[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades23[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades23()
})



router.get("/relatedqueries/necesidades24",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades24() {
    for(let i=0; i<Necesidades.Necesidades24.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades24[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades24[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades24()
})


router.get("/relatedqueries/necesidades25",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades25() {
    for(let i=0; i<Necesidades.Necesidades25.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades25[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades25[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades25()
})


router.get("/relatedqueries/necesidades26",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades26() {
    for(let i=0; i<Necesidades.Necesidades26.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades26[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades26[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades26()
})


router.get("/relatedqueries/necesidades27",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades27() {
    for(let i=0; i<Necesidades.Necesidades27.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades27[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades27[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades27()
})


router.get("/relatedqueries/necesidades28",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades28() {
    for(let i=0; i<Necesidades.Necesidades28.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades28[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades28[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades28()
})


router.get("/relatedqueries/necesidades29",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades29() {
    for(let i=0; i<Necesidades.Necesidades29.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades29[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades29[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades29()
})


router.get("/relatedqueries/necesidades30",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades30() {
    for(let i=0; i<Necesidades.Necesidades30.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades30[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades30[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades30()
})


router.get("/relatedqueries/necesidades31",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades31() {
    for(let i=0; i<Necesidades.Necesidades31.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades31[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades31[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades31()
})


router.get("/relatedqueries/necesidades32",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades32() {
    for(let i=0; i<Necesidades.Necesidades32.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades32[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades32[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades32()
})


router.get("/relatedqueries/necesidades33",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades33() {
    for(let i=0; i<Necesidades.Necesidades33.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades33[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades33[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades33()
})


router.get("/relatedqueries/necesidades34",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades34() {
    for(let i=0; i<Necesidades.Necesidades34.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades34[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades34[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades34()
})


router.get("/relatedqueries/necesidades35",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades35() {
    for(let i=0; i<Necesidades.Necesidades35.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades35[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQNecesidad (BusquedaRelacionada,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades35[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades35()
})
/*****NECESIDAD RELATED QUERIES *****/


/*****MARCAS RELATED TOPICS *****/
router.get("/relatedtopics/mrcnombre0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre0() {
    for(let i=0; i<MrcNombre.MrcNombre0.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre0[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre0()
})

router.get("/relatedtopics/mrcnombre1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre1() {
    for(let i=0; i<MrcNombre.MrcNombre1.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre1[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre1()
})

router.get("/relatedtopics/mrcnombre2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre2() {
    for(let i=0; i<MrcNombre.MrcNombre2.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre2[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre2()
})


router.get("/relatedtopics/mrcnombre3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre3() {
    for(let i=0; i<MrcNombre.MrcNombre3.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre3[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre3()
})

router.get("/relatedtopics/mrcnombre4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre4() {
    for(let i=0; i<MrcNombre.MrcNombre4.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre4[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre4()
})

router.get("/relatedtopics/mrcnombre5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre5() {
    for(let i=0; i<MrcNombre.MrcNombre5.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre5[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre5()
})

router.get("/relatedtopics/mrcnombre6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre6() {
    for(let i=0; i<MrcNombre.MrcNombre6.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre6[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre6()
})

router.get("/relatedtopics/mrcnombre7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre7() {
    for(let i=0; i<MrcNombre.MrcNombre7.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre7[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre7[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre7()
})

router.get("/relatedtopics/mrcnombre8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre8() {
    for(let i=0; i<MrcNombre.MrcNombre8.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre8[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre8[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre8()
})

router.get("/relatedtopics/mrcnombre9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre9() {
    for(let i=0; i<MrcNombre.MrcNombre9.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre9[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre9[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre9()
})

router.get("/relatedtopics/mrcnombre10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre10() {
    for(let i=0; i<MrcNombre.MrcNombre10.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre10[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre10[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre10()
})

router.get("/relatedtopics/mrcnombre11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre11() {
    for(let i=0; i<MrcNombre.MrcNombre11.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre11[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre11[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre11()
})

router.get("/relatedtopics/mrcnombre12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre12() {
    for(let i=0; i<MrcNombre.MrcNombre12.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre12[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTMarca (TopicoRelacionado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${MrcNombre.MrcNombre12[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre12()
})

/*****MARCAS RELATED TOPICS*****/



/*****NECESIDAD RELATED TOPICS*****/
router.get("/relatedtopics/necesidades0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades0() {
    for(let i=0; i<Necesidades.Necesidades0.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades0[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades0()
})


router.get("/relatedtopics/necesidades1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades1() {
    for(let i=0; i<Necesidades.Necesidades1.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades1[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades1()
})


router.get("/relatedtopics/necesidades2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades2() {
    for(let i=0; i<Necesidades.Necesidades2.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades2[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades2()
})


router.get("/relatedtopics/necesidades3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades3() {
    for(let i=0; i<Necesidades.Necesidades3.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades3[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades3()
})


router.get("/relatedtopics/necesidades4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades4() {
    for(let i=0; i<Necesidades.Necesidades4.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades4[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades4()
})


router.get("/relatedtopics/necesidades5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades5() {
    for(let i=0; i<Necesidades.Necesidades5.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades5[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades5()
})


router.get("/relatedtopics/necesidades6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades6() {
    for(let i=0; i<Necesidades.Necesidades6.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades6[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades6()
})


router.get("/relatedtopics/necesidades7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades7() {
    for(let i=0; i<Necesidades.Necesidades7.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades7[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades7[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades7()
})


router.get("/relatedtopics/necesidades8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades8() {
    for(let i=0; i<Necesidades.Necesidades8.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades8[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades8[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades8()
})


router.get("/relatedtopics/necesidades9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades9() {
    for(let i=0; i<Necesidades.Necesidades9.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades9[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades9[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades9()
})


router.get("/relatedtopics/necesidades10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades10() {
    for(let i=0; i<Necesidades.Necesidades10.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades10[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades10[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades10()
})


router.get("/relatedtopics/necesidades11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades11() {
    for(let i=0; i<Necesidades.Necesidades11.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades11[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades11[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades11()
})


router.get("/relatedtopics/necesidades12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades12() {
    for(let i=0; i<Necesidades.Necesidades12.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades12[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades12[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades12()
})


router.get("/relatedtopics/necesidades13",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades13() {
    for(let i=0; i<Necesidades.Necesidades13.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades13[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades13[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades13()
})


router.get("/relatedtopics/necesidades14",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades14() {
    for(let i=0; i<Necesidades.Necesidades14.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades14[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades14[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades14()
})


router.get("/relatedtopics/necesidades15",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades15() {
    for(let i=0; i<Necesidades.Necesidades15.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades15[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades15[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades15()
})


router.get("/relatedtopics/necesidades16",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades16() {
    for(let i=0; i<Necesidades.Necesidades16.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades16[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades16[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades16()
})


router.get("/relatedtopics/necesidades17",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades17() {
    for(let i=0; i<Necesidades.Necesidades17.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades17[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades17[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades17()
})


router.get("/relatedtopics/necesidades18",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades18() {
    for(let i=0; i<Necesidades.Necesidades18.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades18[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades18[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades18()
})


router.get("/relatedtopics/necesidades19",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades19() {
    for(let i=0; i<Necesidades.Necesidades19.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades19[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades19[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades19()
})


router.get("/relatedtopics/necesidades20",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades20() {
    for(let i=0; i<Necesidades.Necesidades20.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades20[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades20[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades20()
})


router.get("/relatedtopics/necesidades21",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades21() {
    for(let i=0; i<Necesidades.Necesidades21.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades21[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades21[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades21()
})


router.get("/relatedtopics/necesidades22",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades22() {
    for(let i=0; i<Necesidades.Necesidades22.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades22[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades22[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades22()
})

router.get("/relatedtopics/necesidades23",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades23() {
    for(let i=0; i<Necesidades.Necesidades23.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades23[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades23[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades23()
})


router.get("/relatedtopics/necesidades24",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades24() {
    for(let i=0; i<Necesidades.Necesidades24.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades24[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades24[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades24()
})

router.get("/relatedtopics/necesidades25",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades25() {
    for(let i=0; i<Necesidades.Necesidades25.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades25[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades25[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades25()
})

router.get("/relatedtopics/necesidades26",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades26() {
    for(let i=0; i<Necesidades.Necesidades26.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades26[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades26[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades26()
})


router.get("/relatedtopics/necesidades27",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades27() {
    for(let i=0; i<Necesidades.Necesidades27.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades27[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades27[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades27()
})


router.get("/relatedtopics/necesidades28",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades28() {
    for(let i=0; i<Necesidades.Necesidades28.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades28[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades28[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades28()
})


router.get("/relatedtopics/necesidades29",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades29() {
    for(let i=0; i<Necesidades.Necesidades29.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades29[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades29[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades29()
})


router.get("/relatedtopics/necesidades30",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades30() {
    for(let i=0; i<Necesidades.Necesidades30.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades30[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades30[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades30()
})


router.get("/relatedtopics/necesidades31",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades31() {
    for(let i=0; i<Necesidades.Necesidades31.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades31[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades31[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades31()
})


router.get("/relatedtopics/necesidades32",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades32() {
    for(let i=0; i<Necesidades.Necesidades32.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades32[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades32[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades32()
})


router.get("/relatedtopics/necesidades33",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades33() {
    for(let i=0; i<Necesidades.Necesidades33.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades33[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades33[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades33()
})


router.get("/relatedtopics/necesidades34",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades34() {
    for(let i=0; i<Necesidades.Necesidades34.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades34[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades34[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades34()
})

router.get("/relatedtopics/necesidades35",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades35() {
    for(let i=0; i<Necesidades.Necesidades35.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades35[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTNecesidad (TopicoRelacionado,Necesidad,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Necesidades.Necesidades35[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidades35()
})

/*****NECESIDAD RELATED TOPICS*****/



/*****MARCA INTEREST OVER TIME*****/
router.get("/interestovertime/mrcnombre0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre0() {
    for(let i=0; i<MrcNombre.MrcNombre0.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre0[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre0()
})

router.get("/interestovertime/mrcnombre1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre1() {
    for(let i=0; i<MrcNombre.MrcNombre1.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre1[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre1()
})

router.get("/interestovertime/mrcnombre2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre2() {
    for(let i=0; i<MrcNombre.MrcNombre2.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre2[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre2()
})

router.get("/interestovertime/mrcnombre3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre3() {
    for(let i=0; i<MrcNombre.MrcNombre3.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre3[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre3()
})

router.get("/interestovertime/mrcnombre4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre4() {
    for(let i=0; i<MrcNombre.MrcNombre4.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre4[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre4()
})

router.get("/interestovertime/mrcnombre5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre5() {
    for(let i=0; i<MrcNombre.MrcNombre5.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre5[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre5()
})

router.get("/interestovertime/mrcnombre6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre6() {
    for(let i=0; i<MrcNombre.MrcNombre6.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre6[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre6()
})

router.get("/interestovertime/mrcnombre7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre7() {
    for(let i=0; i<MrcNombre.MrcNombre7.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre7[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre7[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre7()
})

router.get("/interestovertime/mrcnombre8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre8() {
    for(let i=0; i<MrcNombre.MrcNombre8.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre8[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre8[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre8()
})

router.get("/interestovertime/mrcnombre9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre9() {
    for(let i=0; i<MrcNombre.MrcNombre9.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre9[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre9[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre9()
})

router.get("/interestovertime/mrcnombre10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre10() {
    for(let i=0; i<MrcNombre.MrcNombre10.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre10[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre10[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre10()
})

router.get("/interestovertime/mrcnombre11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre11() {
    for(let i=0; i<MrcNombre.MrcNombre11.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre11[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre11[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre11()
})

router.get("/interestovertime/mrcnombre12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre12() {
    for(let i=0; i<MrcNombre.MrcNombre12.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre12[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTMarca (Tiempo,MrcNombre,Valor) VALUES ('${r.formattedAxisTime}','${MrcNombre.MrcNombre12[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
mrcnombre12()
})
/*****MARCA INTEREST OVER TIME*****/


/*****NECESIDAD INTEREST OVER TIME*****/
router.get("/interestovertime/necesidades0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades0() {
    for(let i=0; i<Necesidades.Necesidades0.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades0()
})

router.get("/interestovertime/necesidades1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades1() {
    for(let i=0; i<Necesidades.Necesidades1.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades1()
})

router.get("/interestovertime/necesidades2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades2() {
    for(let i=0; i<Necesidades.Necesidades2.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades2()
})

router.get("/interestovertime/necesidades3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades3() {
    for(let i=0; i<Necesidades.Necesidades3.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades3()
})


router.get("/interestovertime/necesidades4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades4() {
    for(let i=0; i<Necesidades.Necesidades4.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades4()
})

router.get("/interestovertime/necesidades5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades5() {
    for(let i=0; i<Necesidades.Necesidades5.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades5()
})


router.get("/interestovertime/necesidades6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades6() {
    for(let i=0; i<Necesidades.Necesidades6.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades6()
})


router.get("/interestovertime/necesidades7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades7() {
    for(let i=0; i<Necesidades.Necesidades7.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades7[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades7()
})

router.get("/interestovertime/necesidades8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades8() {
    for(let i=0; i<Necesidades.Necesidades8.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades8[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades8()
})

router.get("/interestovertime/necesidades9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades9() {
    for(let i=0; i<Necesidades.Necesidades9.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades9[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades9()
})

router.get("/interestovertime/necesidades10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades10() {
    for(let i=0; i<Necesidades.Necesidades10.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades10[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades10()
})

router.get("/interestovertime/necesidades11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades11() {
    for(let i=0; i<Necesidades.Necesidades11.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades11[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades11()
})

router.get("/interestovertime/necesidades12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades12() {
    for(let i=0; i<Necesidades.Necesidades12.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades12[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades12()
})


router.get("/interestovertime/necesidades13",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades13() {
    for(let i=0; i<Necesidades.Necesidades13.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades13[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades13()
})

router.get("/interestovertime/necesidades14",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades14() {
    for(let i=0; i<Necesidades.Necesidades14.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades14[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades14()
})

router.get("/interestovertime/necesidades15",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades15() {
    for(let i=0; i<Necesidades.Necesidades15.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades15[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades15()
})

router.get("/interestovertime/necesidades16",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades16() {
    for(let i=0; i<Necesidades.Necesidades16.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades16[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades16()
})


router.get("/interestovertime/necesidades17",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades17() {
    for(let i=0; i<Necesidades.Necesidades17.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades17[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades17()
})

router.get("/interestovertime/necesidades18",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades18() {
    for(let i=0; i<Necesidades.Necesidades18.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades18[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades18()
})

router.get("/interestovertime/necesidades19",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades19() {
    for(let i=0; i<Necesidades.Necesidades19.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades19[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades19()
})

router.get("/interestovertime/necesidades20",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades20() {
    for(let i=0; i<Necesidades.Necesidades20.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades20[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades20()
})

router.get("/interestovertime/necesidades21",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades21() {
    for(let i=0; i<Necesidades.Necesidades21.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades21[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades21()
})

router.get("/interestovertime/necesidades22",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades22() {
    for(let i=0; i<Necesidades.Necesidades22.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades22[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades22()
})


router.get("/interestovertime/necesidades23",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades23() {
    for(let i=0; i<Necesidades.Necesidades23.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades23[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades23()
})

router.get("/interestovertime/necesidades24",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades24() {
    for(let i=0; i<Necesidades.Necesidades24.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades24[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades24()
})

router.get("/interestovertime/necesidades25",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades25() {
    for(let i=0; i<Necesidades.Necesidades25.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades25[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades25()
})

router.get("/interestovertime/necesidades26",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades26() {
    for(let i=0; i<Necesidades.Necesidades26.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades26[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades26()
})

router.get("/interestovertime/necesidades27",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades27() {
    for(let i=0; i<Necesidades.Necesidades27.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades27[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades27()
})

router.get("/interestovertime/necesidades28",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades28() {
    for(let i=0; i<Necesidades.Necesidades28.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades28[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades28()
})

router.get("/interestovertime/necesidades29",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades29() {
    for(let i=0; i<Necesidades.Necesidades29.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades29[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades29()
})

router.get("/interestovertime/necesidades30",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades30() {
    for(let i=0; i<Necesidades.Necesidades30.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades30[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades30()
})

router.get("/interestovertime/necesidades31",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades31() {
    for(let i=0; i<Necesidades.Necesidades31.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades31[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades31()
})

router.get("/interestovertime/necesidades32",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades32() {
    for(let i=0; i<Necesidades.Necesidades32.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades32[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades32()
})

router.get("/interestovertime/necesidades33",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades33() {
    for(let i=0; i<Necesidades.Necesidades33.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades33[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades33()
})

router.get("/interestovertime/necesidades34",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades34() {
    for(let i=0; i<Necesidades.Necesidades34.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades34[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades34()
})

router.get("/interestovertime/necesidades35",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades35() {
    for(let i=0; i<Necesidades.Necesidades35.length; i++) {
      googleTrends.relatedQueries({keyword:Necesidades.Necesidades35[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${r.formattedAxisTime}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades35()
})
/*****NECESIDAD INTEREST OVER TIME*****/



/*****COMPETENCIA POR REGION*****/
router.get("/interestbyregion/competencia0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia0() {
    for(let i=0; i<Competencia.Competencia0.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia0[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia0[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia0()
})


router.get("/interestbyregion/competencia1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia1() {
    for(let i=0; i<Competencia.Competencia1.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia1[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia1[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia1()
})


router.get("/interestbyregion/competencia2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia2() {
    for(let i=0; i<Competencia.Competencia2.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia2[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia2[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia2()
})


router.get("/interestbyregion/competencia3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia3() {
    for(let i=0; i<Competencia.Competencia3.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia3[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia3[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia3()
})


router.get("/interestbyregion/competencia4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia4() {
    for(let i=0; i<Competencia.Competencia4.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia4[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia4[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia4()
})


router.get("/interestbyregion/competencia5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia5() {
    for(let i=0; i<Competencia.Competencia5.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia5[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia5[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia5()
})


router.get("/interestbyregion/competencia6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia6() {
    for(let i=0; i<Competencia.Competencia6.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia6[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia6[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia6()
})
/****COMPETENCIA POR REGION*****/


/****COMPETENCIA POR CIUDAD*****/
router.get("/interestbycity/competencia0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia0() {
    for(let i=0; i<Competencia.Competencia0.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia0[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadCompetencia (Ciudad,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia0[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia0()
})


router.get("/interestbycity/competencia1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia1() {
    for(let i=0; i<Competencia.Competencia1.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia1[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadCompetencia (Ciudad,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia1[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia1()
})


router.get("/interestbycity/competencia2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia2() {
    for(let i=0; i<Competencia.Competencia2.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia2[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadCompetencia (Ciudad,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia2[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia2()
})


router.get("/interestbycity/competencia3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia3() {
    for(let i=0; i<Competencia.Competencia3.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia3[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadCompetencia (Ciudad,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia3[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia3()
})


router.get("/interestbycity/competencia4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia4() {
    for(let i=0; i<Competencia.Competencia4.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia4[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadCompetencia (Ciudad,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia4[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia4()
})


router.get("/interestbycity/competencia5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia5() {
    for(let i=0; i<Competencia.Competencia5.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia5[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadCompetencia (Ciudad,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia5[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia5()
})


router.get("/interestbycity/competencia6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia6() {
    for(let i=0; i<Competencia.Competencia6.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia6[i],geo:"MX",hl:"es-419",resolution:"CITY"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorCiudadCompetencia (Ciudad,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.geoName}','${Competencia.Competencia6[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia6()
})

/****COMPETENCIA POR CIUDAD*****/



/****COMPETENCIA RELATED QUERIES*****/
router.get("/relatedqueries/competencia0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia0() {
    for(let i=0; i<Competencia.Competencia0.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQCompetencia (BusquedaRelacionada,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia0[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia0()
})


router.get("/relatedqueries/competencia1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia1() {
    for(let i=0; i<Competencia.Competencia1.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQCompetencia (BusquedaRelacionada,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia1[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia1()
})


router.get("/relatedqueries/competencia2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia2() {
    for(let i=0; i<Competencia.Competencia2.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQCompetencia (BusquedaRelacionada,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia2[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia2()
})


router.get("/relatedqueries/competencia3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia3() {
    for(let i=0; i<Competencia.Competencia3.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQCompetencia (BusquedaRelacionada,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia3[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia3()
})


router.get("/relatedqueries/competencia4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia4() {
    for(let i=0; i<Competencia.Competencia4.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQCompetencia (BusquedaRelacionada,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia4[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia4()
})


router.get("/relatedqueries/competencia5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia5() {
    for(let i=0; i<Competencia.Competencia5.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQCompetencia (BusquedaRelacionada,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia5[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia5()
})


router.get("/relatedqueries/competencia6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia6() {
    for(let i=0; i<Competencia.Competencia6.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQCompetencia (BusquedaRelacionada,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia6[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia6()
})
/****COMPETENCIA RELATED QUERIES*****/



/****COMPETENCIA RELATED TOPICS*****/
router.get("/relatedtopics/competencia0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia0() {
    for(let i=0; i<Competencia.Competencia0.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia0[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia0()
})


router.get("/relatedtopics/competencia1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia1() {
    for(let i=0; i<Competencia.Competencia1.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia1[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia1()
})


router.get("/relatedtopics/competencia2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia2() {
    for(let i=0; i<Competencia.Competencia2.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia2[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia2()
})


router.get("/relatedtopics/competencia3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia3() {
    for(let i=0; i<Competencia.Competencia3.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia3[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia3()
})


router.get("/relatedtopics/competencia4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia4() {
    for(let i=0; i<Competencia.Competencia4.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia4[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia4()
})


router.get("/relatedtopics/competencia5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia5() {
    for(let i=0; i<Competencia.Competencia5.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia5[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia5()
})


router.get("/relatedtopics/competencia6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia6() {
    for(let i=0; i<Competencia.Competencia6.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,SOutSemana,SOutAnio) VALUES ('${r.query}','${Competencia.Competencia6[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia6()
})
/****COMPETENCIA RELATED TOPICS*****/



/****COMPETENCIA INTEREST OVER TIME*****/
router.get("/interestovertime/competencia0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia0() {
    for(let i=0; i<Competencia.Competencia0.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${r.formattedAxisTime}','${Competencia.Competencia0[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia0()
})


router.get("/interestovertime/competencia1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia1() {
    for(let i=0; i<Competencia.Competencia1.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${r.formattedAxisTime}','${Competencia.Competencia1[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia1()
})


router.get("/interestovertime/competencia2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia2() {
    for(let i=0; i<Competencia.Competencia2.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${r.formattedAxisTime}','${Competencia.Competencia2[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia2()
})


router.get("/interestovertime/competencia3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia3() {
    for(let i=0; i<Competencia.Competencia3.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${r.formattedAxisTime}','${Competencia.Competencia3[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia3()
})


router.get("/interestovertime/competencia4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia4() {
    for(let i=0; i<Competencia.Competencia4.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${r.formattedAxisTime}','${Competencia.Competencia4[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia4()
})


router.get("/interestovertime/competencia5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia5() {
    for(let i=0; i<Competencia.Competencia5.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${r.formattedAxisTime}','${Competencia.Competencia5[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia5()
})


router.get("/interestovertime/competencia6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia6() {
    for(let i=0; i<Competencia.Competencia6.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${r.formattedAxisTime}','${Competencia.Competencia6[i]}',${r.value[0]})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia6()
})
/****COMPETENCIA INTEREST OVER TIME*****/

module.exports = router;
