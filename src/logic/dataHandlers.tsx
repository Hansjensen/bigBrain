import { LogEntry, User } from "../types/interfaces"

const userTotalGramsHandler = (logEntries: LogEntry[], scene: string) => {

    let sum: number = 0

    logEntries.map((log) => {
        if(log.scene === scene) {
            sum = log.grams + sum
        }
    })

    return sum;

}

const userTotalOwedHandler = (totalGrams: number, pricePerPound: number, wetDry: string) => {
    let pricePerGram: number = 0
    
    if(wetDry === "Wet") {
        pricePerGram = parseFloat((pricePerPound/2200).toFixed(4))
    } else {
        pricePerGram = parseFloat((pricePerPound/454).toFixed(4))
    }

    return Math.round(pricePerGram * totalGrams)
    

    
}

export {userTotalGramsHandler, userTotalOwedHandler}