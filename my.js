function navFunc(){
    const navBtn = document.getElementById('navBtn');
    const navList = document.getElementById('navList');
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const navMenuClose = document.getElementById('navMenuClose');
    const workingHoursBtn1 = document.getElementById('seeWorkingHoursOne');
    const workingHoursBtn2 = document.getElementById('seeWorkingHoursTwo');
    const workingHoursButtonArray = [workingHoursBtn1, workingHoursBtn2];
    const workingHours = document.getElementById('workingHours');
    const exitWorkingHoursBtn = document.getElementById('exitWorkingHours');

    navBtn.addEventListener('click', () =>{
        navMenu.classList.toggle('hidden')
        navMenuClose.classList.toggle('hidden')
        navList.classList.toggle('navMenuAnimation')
        navbar.classList.toggle('navbarAnimation')
        workingHoursBtn1.classList.toggle('decoration-customOrange')
    })

    workingHoursButtonArray.forEach((button) =>{
        button.addEventListener('click', () =>{
            workingHours.classList.toggle('workingHoursAnimation')
            document.querySelector('body').style.overflowY = 'hidden'
        })
    })

    exitWorkingHoursBtn.addEventListener('click', () =>{
        workingHours.classList.toggle('workingHoursAnimation')
        document.querySelector('body').style.overflowY = "visible"
    })
}

navFunc()

function bannerChange(){
    
    const bannerBg = document.getElementById('banner');
    const backgroundArr = ["./img/moto1-min-darker.jpg", "./img/moto2-min-darker.jpg", "./img/moto3-min-darker.jpg"]
   
     function promise(change, timer) {
    return new Promise ((resolve, reject) =>{
        
     if (bannerChange){
            setTimeout(() => resolve(change()), timer)
        }
    
      else {
            reject ((console.log('error')))
         }
       })
        }
       
    promise(() =>{
                console.log('function running without issue')
            }, 1000)
            
   .then (() =>{
            return promise(() =>{
                bannerBg.style.transition = "500ms ease-in-out"
                bannerBg.style.backgroundImage = `url('${backgroundArr[1]}')`
                }, 7000)
            })
    
    .then (() =>{
        return promise(() =>{
            bannerBg.style.transition = "500ms ease-in-out"
            bannerBg.style.backgroundImage = `url('${backgroundArr[2]}')`
            }, 7000)
            })
    
    .then (() =>{
        return promise(() =>{
            bannerBg.style.transition = "500ms ease-in-out"
            bannerBg.style.backgroundImage = `url('${backgroundArr[0]}')`
            }, 7000)
            })
   }

 setInterval(bannerChange, 25000)

contactSectionFunc()
