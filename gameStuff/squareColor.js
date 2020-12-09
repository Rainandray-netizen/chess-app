module.exports = 
  (rank, file)=>{
    if((rank % 2 == 0 && file % 2 == 0)||rank % 2 != 0 && file % 2 != 0){
      return '#A9A9A9'
    }else{
      return '#DCDCDC'
    }
  }
