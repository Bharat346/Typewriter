// User Variables 
let parameters = { speed: 50, delay: 1000, FONTSIZE: 25 };
let str = "";
let j = 0;

class TypeWriter {
    constructor(id,arr,param = parameters){
        this.type = document.getElementById(id);
        this.keys = arr;
        this.param = param;
        this.styleElement = document.createElement('style');
        this.updateStyles();
        document.head.appendChild(this.styleElement);
    }

    updateStyles() {
        console.log(this.param);
        const { FONTSIZE } = this.param;
        const cssRules = `
            #type {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: ${FONTSIZE}px;
                height: fit-content;
            }
            #text {
                font-size: ${FONTSIZE}px;
            }
            .cursor {
                width: 5px;
                height: 25px;
                background-color: rgba(100, 5, 216, 1);
                animation: opac 0.7s infinite ease-in-out;
              }
            
              @keyframes opac {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
        `;
        this.styleElement.textContent = cssRules;
    }

    calculateTime = (length) => {
        return this.param.speed * length; // Adjust as needed
    }

    printForward = (a) => {
        return new Promise((resolve) => {
            for (let i = 0; i < a.length; i++) {
                setTimeout(() => {
                    str += a[i];
                    this.type.innerText = str;
                    if (i === a.length - 1) {
                        resolve();
                    }
                }, this.calculateTime(i));
            }
        });
    }
    printBackward = () => {
        return new Promise((resolve) => {
            for (let i = str.length; i >= 0; i--) {
                setTimeout(() => {
                    str = str.slice(0, -1);
                    this.type.innerText = str;
                    if (i === 0) {
                        resolve();
                    }
                }, this.calculateTime(str.length - i));
            }
        });
    }

    printText = async (str) => {
        await this.printForward(str);
        await new Promise(resolve => setTimeout(resolve, this.param.delay)); // Wait for 1 second before starting backward printing
        await this.printBackward();
    }
    
    printArray = async () => {
        for (let i = 0; true ; i = (i+1)%arr.length) {
            await this.printText(arr[i]);
            await new Promise(resolve => setTimeout(resolve, this.param.delay)); // Wait for delay before starting next string
        }
    }
}


