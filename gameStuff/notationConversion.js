const basicPGN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

module.exports ={
  convertFEN: (fenString)=>{
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
      

    }

    fenObj.boardPosition = []
  }
}