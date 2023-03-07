(()=>{

    profile = document.getElementById('profile-setting');
    profile.addEventListener('click', () =>{
        document.querySelector('.setting-menu').classList.toggle('hide')
    })

    darkBtn = document.getElementById('change-btn');
    darkBtn.onclick = function(){
        darkBtn.classList.toggle('btn-dark');
        document.body.classList.toggle('change-bg');

        if(localStorage.getItem('theme') == 'dark'){
            localStorage.setItem('theme','light');
        }else{
            localStorage.setItem('theme','dark');
        }
    }

    if(localStorage.getItem('theme') == 'dark'){
        darkBtn.classList.add('btn-dark');
        document.body.classList.add('change-bg');
    }else if(localStorage.getItem('theme') == 'light'){
        darkBtn.classList.remove('btn-dark');
        document.body.classList.remove('change-bg');
    }else{
        localStorage.setItem('theme', 'light');
    }
    

})();