$('#loginout').on('click',function(){
    var inConfirm = confirm('你真得确定退出吗')
    if(inConfirm){
      $.ajax({
        type:'post',
           url:'/logout',
           success: function(data){
               location.href = 'login.html'
           },
           error: function(){
               alert('退出失败')
           }
      })
    }
  })