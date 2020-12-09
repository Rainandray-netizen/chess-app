const basicPGN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

module.exports ={
  convertFEN: (fenString)=>{
    if(!fenString){
      fenString = basicPGN
    }
    
    fenArray = fenString.split(' ')
    fenObj = {
      boardPosition: fenArray[0],
      activeColor: fenArray[1],
      castlingAbility: fenArray[2],
      EnPassantTarget: fenArray[3],
      HalfmoveClock: fenArray[4],
      FullmoveNum: fenArray[5]
    }

    convertPosition = (algNotation) => {
      splitArray = algNotation.split('/')
      console.log({splitArray})
      finalArray = []
      splitArray.map((rank) => {
        const rankArray = []
        rank.split('').map((char)=>{
          if(char.match(/[a-zA-Z]/)){
            rankArray.push(char)
          }else if(char.match(/[1-8]/)){
            //insert that num of empty spaces, or 0's
            for(; 0 < char; char--){
              rankArray.push(0)
            }
          }
        })
        finalArray.unshift(rankArray)
      })
      return finalArray
    }
    
    fenObj.boardPosition = convertPosition(fenObj.boardPosition)

    return fenObj
  }
}