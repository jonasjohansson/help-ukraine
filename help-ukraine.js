window.addEventListener('DOMContentLoaded', (event) => {
	const id = makeid(5)
	const htmlStr = `
    <style>
        html #${id} {
            --b:#3a75c4;
            --y:#f9dd16;
            --h:1rem;
            cursor:pointer;
            background-color:var(--y);
            z-index:9999;
            opacity:1!important;
            display:block!important;
            visibility:visible!important;
        }
        #${id},
        #${id} * {
            position:fixed;
        }
        #${id},
        #${id} a {
            top:0;
            left:0;
            right:0;
            bottom:0;
            width:100%;
            height:calc(100%-var(--h));
        }
        #${id} div {
            bottom:0;
            width:100%;
            height:50%;
            background-color:var(--b);
        }
        #${id}:hover div {
            bottom:unset;
        }
        #${id}:hover div:first-child {
            top:10vh;
            left:50vw;
            margin-left:-10vh;
            width:20vh;
            height:80vh;
        }
        #${id}:hover div:last-child {
            top:50%;
            left:calc(50vw - 40vh);
            margin-top:-10vh;
            width:80vh;
            height:20vh;
        }
        #${id} button {
            left:0;
            right:0;
            bottom:0;
            background-color:black;
            color:white;
            line-height:var(--h);
            cursor:pointer;
            text-transform:uppercase;
        }
    </style>
    <div id="${id}">
        <a target="_blank" href="https://donate.unhcr.org/int/en/ukraine-emergency" alt="Click to learn more how you can help">
            <div></div>
            <div></div>
        </a>
        <button onclick="remove(${id})">Continue to site</button>
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
