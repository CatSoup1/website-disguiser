const websites = {
"google":{"name":"google", "text":"Google", "icon":"https://www.google.com/favicon.ico"},
"googleClassroom":{"name":"google classroom", "text":"Courses", "icon":"https://ssl.gstatic.com/classroom/favicon.png"},
"outlook":{"name":"outlook", "text":"Outlook", "icon":"https://outlook.office365.com/owa/favicon.ico"},
"googleDrive":{"name":"google drive", "text":"My Drive", "icon":"https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png"},
"camMath":{"name":"cambridge math", "text":"Cambridge Essential Math", "icon":"https://emac.hotmaths.com.au/users/branding/emacs/img/favicon.ico"}
}
document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}

const favicon = document.querySelector('[rel=icon]');
const amountOfSites = 5
var count = 0
function ask() {
  var site = prompt("Please insert a website (A list of websites can be found on the github page)")
  var ans = site.toLowerCase()
  console.log(ans, site)
if (site =! null) {
  Object.keys(websites).every(function(key) {
      if (websites[key].name == ans) {
        alert("Site found! disguising site...")
        changeFavicon(websites[key].icon)
        document.title = websites[key].text
        return false
      } else {
       count++
       if (count == amountOfSites) {
       alert("couldnt find site")
}
        return true
      }
      
  })
}
}

ask()
