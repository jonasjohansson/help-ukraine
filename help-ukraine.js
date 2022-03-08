window.addEventListener('DOMContentLoaded', (event) => {
	const id = makeid(5)
	const htmlStr = `
    <style>
        #${id}{
            position:fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            z-index:9999;
            width:100%;
            height:100%;
            cursor:pointer;
            background-color:#3a75c4;
        }
        #${id} div{
            position:absolute;
            width:100%;
            height:50%;
            transitions: all 100ms ease-in-out;
        }
        #${id}:hover div:first-child {
            left:50%;
            margin-left:-10%;
            width:20%;
            height:100%;
        }
        #${id}:hover div:last-child {
            top:50%;
            margin-top:-10%;
            width:100%;
            height:20%;
        }
        #${id} button{
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            background-color:black;
            color:white;
            padding:1rem;
            cursor:pointer;
        }
    </style>
    <div id="${id}">
        <button onclick="remove(${id})">Continue to site</button>
        <a target="_blank" href="https://donate.unhcr.org/int/en/ukraine-emergency" alt="Click to learn more how you can help">
            <div style="background-color:#3a75c4"></div>
            <div style="background-color:#f9dd16"></div>
        </a>
    </div>`
	document.body.insertAdjacentHTML('afterbegin', htmlStr)
})

function remove(el) {
	el.parentNode.removeChild(el)
}

function makeid(length) {
	var result = ''
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	var charactersLength = characters.length
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result
}
