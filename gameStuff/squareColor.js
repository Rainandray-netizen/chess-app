module.exports = 
  (rank, file)=>{
    if((rank % 2 == 0 && file % 2 == 0)||rank % 2 != 0 && file % 2 != 0){
      return '#999999'
    }else{
      return '#FFFFFF'
    }
  }
