/* 
    script.js is developed by https://github.com/AlishaBeg/
*/

console.info('this is developed by https://github.com/AlishaBeg/ ')
document.title = "AlishaBeg"

const emailid = document.getElementById("emailid")
const password = document.getElementById("password")

document.getElementById("login-btn").onclick = () => {
    if (["fake@gmail.com","hackthebox@gmail.com"].indexOf(emailid.value) != -1) {
        if (password.value == "````") {
            document.getElementById("login").innerHTML = (`

                <ul id="information">

                    <li> Time : [<span class="packet">${ new Date().toDateString() }</span>] </li>

                    <li> Window width : <span class="packet"> ${ window.innerWidth } <span> </li>

                    <li> Window height : <span class="packet"> ${ window.innerHeight } <span> </li>
                
                    <li> Operting System : <span class="packet"> ${ window.navigator.oscpu } <span> </li>

                    <li> Use Plathform : <span class="packet"> ${ window.navigator.platform } <span> </li>
                    
                    <li> Application Code Name : <span class="packet"> ${ window.navigator.appCodeName } <span> </li>

                    <li> Application Name : <span class="packet"> ${ window.navigator.appName } <span> </li>

                    <li> Application Version : <span class="packet"> ${ window.navigator.appVersion } <span> </li>
                    
                    <li> Hardware Concurrency : <span class="packet"> ${ window.navigator.hardwareConcurrency } <span> </li>

                    <li> language support : <span class="packet"> ${ window.navigator.languages } <span> </li>
                    
                    <li> is Browser donot track  : <span class="packet"> ${ window.navigator.doNotTrack } <span> </li>
                    
                    <li> is Cookie Enabled : <span class="packet"> ${ window.navigator.cookieEnabled } <span> </li>
                    
                    <li> Any Web Driver : <span class="packet"> ${ window.navigator.webdriver } <span> </li>
                    
                    <li> is Support Java : <span class="packet"> ${ window.navigator.javaEnabled() } <span> </li>

                    <li> is Support PDF : <span class="packet"> ${ window.navigator.pdfViewerEnabled } <span> </li>

                    <li> is Online : <span class="packet"> ${ window.navigator.onLine } <span> </li>
                
                </ul>
            `)
        } else {
            console.error(" ilii don't be oversmart!")
        }
    } else {
        window.open("https://www.hackthebox.com/","_self")
    }
}