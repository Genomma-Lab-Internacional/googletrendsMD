const express = require('express');
const router  = express.Router();
const connection = require("../constants/connection")
const googleTrends = require("google-trends-api")
const weekNumber = require("current-week-number")
const MrcNombre = require("../constants/MrcNombre")
const MrcNombreID = require("../constants/MrcNombreID")


/****MARCA RELATED QUERIES*****/
router.get("/mrcnombre0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre0() {
    for(let i=0; i<MrcNombre.MrcNombre0.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre0[i]}','${MrcNombreID.MrcNombre0ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre0()
})


router.get("/mrcnombre1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre1() {
    for(let i=0; i<MrcNombre.MrcNombre1.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre1[i]}','${MrcNombreID.MrcNombre1ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre1()
})


router.get("/mrcnombre2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre2() {
    for(let i=0; i<MrcNombre.MrcNombre2.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre2[i]}','${MrcNombreID.MrcNombre2ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre2()
})

router.get("/mrcnombre3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre3() {
    for(let i=0; i<MrcNombre.MrcNombre3.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre3[i]}','${MrcNombreID.MrcNombre3ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre3()
})

router.get("/mrcnombre4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre4() {
    for(let i=0; i<MrcNombre.MrcNombre4.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre4[i]}','${MrcNombreID.MrcNombre4ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre4()
})

router.get("/mrcnombre5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre5() {
    for(let i=0; i<MrcNombre.MrcNombre5.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre5[i]}','${MrcNombreID.MrcNombre5ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre5()
})

router.get("/mrcnombre6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre6() {
    for(let i=0; i<MrcNombre.MrcNombre6.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre6[i]}','${MrcNombreID.MrcNombre6ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre6()
})

router.get("/mrcnombre7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre7() {
    for(let i=0; i<MrcNombre.MrcNombre7.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre7[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre7[i]}','${MrcNombreID.MrcNombre7ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre7()
})


router.get("/mrcnombre8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre8() {
    for(let i=0; i<MrcNombre.MrcNombre8.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre8[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre8[i]}','${MrcNombreID.MrcNombre8ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre8()
})

router.get("/mrcnombre9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre9() {
    for(let i=0; i<MrcNombre.MrcNombre9.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre9[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre9[i]}','${MrcNombreID.MrcNombre9ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre9()
})

router.get("/mrcnombre10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre10() {
    for(let i=0; i<MrcNombre.MrcNombre10.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre10[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre10[i]}','${MrcNombreID.MrcNombre10ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre10()
})

router.get("/mrcnombre11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre11() {
    for(let i=0; i<MrcNombre.MrcNombre11.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre11[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre11[i]}','${MrcNombreID.MrcNombre11ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre11()
})

router.get("/mrcnombre12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function mrcnombre12() {
    for(let i=0; i<MrcNombre.MrcNombre12.length; i++) {
      googleTrends.relatedQueries({keyword:MrcNombre.MrcNombre12[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RQMarca (BusquedaRelacionada,MrcNombre,MrcNombreID,Valor,Semana,Anio) VALUES ('${r.query}','${MrcNombre.MrcNombre12[i]}','${MrcNombreID.MrcNombre12ID[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 mrcnombre12()
})
/****MARCA RELATED QUERIES*****/


module.exports = router;
