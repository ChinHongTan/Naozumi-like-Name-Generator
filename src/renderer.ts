// Extend the Window interface to include the `versions` property
declare global {
    interface Window {
        versions: {
            node: () => string;
            chrome: () => string;
            electron: () => string;
            ping: () => Promise<string>;
            generate: (data?: string) => void;
            reply: (callback: any) => void;
        };
    }
}

const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`;



let genButton = document.getElementById('generate');
genButton.addEventListener('click', async () => {
    window.versions.generate();
});

window.versions.reply((event: any, data: string) => {
    const naozumi = document.getElementById('naozumi');
    naozumi.innerText = data;
});

const func = async () => {
    const response = await window.versions.ping();
    console.log(response); // prints out 'pong'
}
  
func()

export {};