
async function readNFC(){
    consoleLog("--- reading... ---");
    if ("NDEFReader" in window){
        const ndef = new NDEFReader();
        try {
            await ndef.scan();
            ndef.onreading = event => {
                const decoder = new TextDecoder();
                for (const record of event.message.records){
                    consoleLog("Record type: " + record.recordType);
                    consoleLog("MIME type: " + record.mediaType);
                    consoleLog("=== data ===\n"+  decoder.decode(record.data)); 
                }
            }
        } catch (error){
            consoleLog(error);
        }
    } else {
        consoleLog("Web NFC tag not supported.");
    }
    consoleLog("+++ stopped reading +++");
}

async function writeNFC(){
    consoleLog("--- writing... ---");
    if ("NDEFReader" in window){
        const ndef = new NDEFReader();
        try {
            await ndef.write("sup");
            consoleLog("NFC message written");
            ndef.onreading = event => {
                const decoder = new TextDecoder();
                for (const record of event.message.records){
                    consoleLog("Record type: " + record.recordType);
                    consoleLog("MIME type: " + record.mediaType);
                    consoleLog("=== data ===\n"+  decoder.decode(record.data)); 
                }
            }
        } catch (error){
            consoleLog(error);
        }
    } else {
        consoleLog("Web NFC tag not supported.");
    }
    consoleLog("+++ stopped writing +++");
}

function consoleLog(data) {
    var logElement = document.getElementById('log');
    logElement.innerHTML += data + '\n';
}