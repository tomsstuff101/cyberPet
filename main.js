console.clear()


class petStatusBasic {
    constructor(hunger, thirst, sleep, poop){
    this.hunger = hunger
    this.thirst = thirst
    this.sleep = sleep
    this.poop = poop
    this.emotion = 5
      
    this.emotionDisplay = {
      verySad: {
        phrase:"very unhappy, your not treating me well",
        emoticon:":-(",
        gifyUrl: "https://media.giphy.com/media/B1xE0PEh5mVO0/giphy.gif"
      },
      sad: {
        phrase:"mmm Im unhappy, please be more nice to me",
        emoticon:":(",
        gifyUrl: "https://media.giphy.com/media/TU76e2JHkPchG/giphy.gif"
      },
      ok: {
        phrase:"Im ok, could be better could be worse",
        emoticon:":/",
        gifyUrl:"https://media.giphy.com/media/Fmei8Z5tft07C/giphy.gif"
      },
      happy: {
        phrase: "I'm feeling goooooood!",
        emoticon:"8D",
        gifyUrl: "https://media.giphy.com/media/6ZpFOwW5ifh4Y/giphy.gif"
      },
      veryHappy: {
        phrase: "lovin it !!",
        emoticon:":)",
        gifyUrl: "https://media.giphy.com/media/Fmei8Z5tft07C/giphy.gif"
      }
    }
     } 
  


  hungerStatus(){
    if(this.hunger <= 3){
      return `Im full thanks, hunger is ${this.hunger}`
    }
    else if((this.hunger >3) && (this.hunger <=7 )){
      return `Im a bit peckish, hunger is ${this.hunger}`
    }
    else{
      return `I need food!, hunger is ${this.hunger}`
    }
  }
  
  

  
  thirstStatus(){
        if(this.thirst <= 3){
      return `I don't need a drink, thirst is ${this.thirst}`
    }
    else if((this.thirst >3) && (this.thirst <=7 )){
      return `I feel a bit thirsty, thirst is ${this.thirst}`
    }
    else{
      return `Give me a flipping drink!, thirst is ${this.thirst}`
    }
  }
  
  sleepStatus(){
            if(this.sleep <= 3){
      return `Im wide awake and ready to go, sleep is ${this.sleep}`
    }
    else if((this.sleep >3) && (this.sleep <=7 )){
      return `I clould do with a nap, sleep is ${this.sleep}`
    }
    else{
      return `bed time for me!, sleep is ${this.sleep}`
    }
  }
  
  poopStatus(){
      if(this.poop <= 3){
      return `Im fresh as a daisy, poo is ${this.poop}`
    }
    else if((this.poop >3) && (this.poop <=7 )){
      return `Its No. 2 time.....  poo is ${this.poop}`
    }
    else{
      return `I need a clean up!, poo is ${this.poop}`
    }
  }
  
  
  moreFood(){
    if(this.hunger < 8)
    {this.hunger = this.hunger + 2}
  }
  
  moreDrink(){
    if(this.thirst < 8)
    {this.thirst = this.thirst + 2}
  }
  
  morePoop(){
    if(this.poop < 10)
    {this.poop = this.poop + 1}
  }
  
  moreSleep(){
    if(this.sleep < 10)
    {this.sleep = this.sleep + 1}
  }
  
  reduceHunger(){
    if(this.hunger > 0)
    {this.hunger = this.hunger - 1}
    console.log(`food button pressed`)
  }
  
  reduceThirst(){
    if(this.thirst > 0)
    {this.thirst = this.thirst - 1}
    console.log(`drink button pressed`)
  }
  
  reducePoop(){
    if(this.poop > 0)
    {this.poop = this.poop - 1}
    console.log(`poop button pressed`)
  }
  
  reduceSleep(){
    if(this.sleep > 0)
    {this.sleep = this.sleep - 1}
    console.log(`sleep button pressed`)
  }
  
  
 // using overall total emotional state  gice back via an array an appropriate phrase, icon or gify url
  // low is good -  high is bad
   showEmotion(){
     let teste = Math.round(this.emotion)
     console.log(`Math.round this.emotion is ${teste}`)
     let edis = this.emotionDisplay
     
     
        if(teste <= 2){return edis.veryHappy}
        else if((teste > 2) && (teste <=4)){return edis.happy}
        else if((teste > 4) && (teste <= 6)){return edis.ok}
        else if((teste > 6) && (teste <= 8)){return edis.sad}
        else if(teste > 8){return edis.verySad}
     
      }
}
  // Use object litteral to link general emotion with a url other output
  // as a default. Can be modified for individual pet

  


  
  

class horsePet extends petStatusBasic {
  constructor(riding, grooming){
    super(riding, grooming)
    this.riding = riding
    this.grooming = grooming
  }
  
   emotionHorse(){
    this.emotion = this.hunger + this.thirst + this.sleep + this.poop+ this.riding + this.grooming
     
     this.emotion = Math.round(this.emotion / 6)   
     return this.emotion
  }
  
  ridingStatus(){
    if(this.riding <= 3){
      return "I dont need a ride thanks"
    }
    else if((this.riding >3) && (this.riding <=7 )){
      return "I could do with a cantor"
    }
    else{
      return "I need a gallop!"
    }
    
  }
  
  moreRiding(){
    if(this.riding < 7)
    {this.riding = this.riding + 3}
  }
  
  moreGrooming(){
    if(this.grooming < 7)
    {this.grooming = this.grooming + 3}
  }
  
  reduceGrooming(){
    if(this.grooming > 0)
    {this.grooming = this.grooming - 1}
  }
  
  reduceRiding(){
    if(this.riding > 0){
    this.riding = this.riding - 1}
  }
  
  groomingStatus(){
     if(this.grooming <= 3){
      return "I dont need grooming thanks"
    }
    else if((this.grooming >3) && (this.grooming <=7 )){
      return "I could do with a brush n comb"
    }
    else{
      return "I need grooming!"
    }
   
  }

  
}


class snakePet extends petStatusBasic {
  constructor(tankClean){
    super(tankClean)
    this.tankClean = tankClean
  }
  
    
 tankCleanStatus(){
      if(this.tankClean <= 3){
      return `I dont need a my tank cleaning thanks ${this.tankClean}`
    }
    else if((this.tankClean >3) && (this.tankClean <=7 )){
      return `My tank could do with a scrub ${this.tankClean}`
    }
    else{
      return `My tank is scummy, please clean it! ${this.tankClean}`
    }
  }
  
  emotionSnake(){
    this.emotion = this.hunger + this.thirst + this.sleep + this.poop + this.tankClean
    this.emotion = Math.round(this.emotion / 5)   
    return this.emotion
  }
  
  moreTank(){
    if(this.tankClean < 7)
    {this.tankClean = this.tankClean + 3}
  }
  
 reduceTank(){
   if(this.tankClean > 0)
   {this.tankClean = this.tankClean - 1}
   console.log(`clean tank button pressed`)
   
  }
  
  
 }



// to initialise pet with randomised values
const randValue = () => {
  return Math.floor((Math.random() * 10))
}




// ================================================
// ================================================
// MAIN

console.log("*****  CREATE PETS    ******")

// Create Pets with randomised values
const slippy = new snakePet()
// slippy.hunger = randValue()
// slippy.thirst = randValue()
// slippy.sleep = randValue()
// slippy.poop = randValue()
// slippy.tankClean = randValue()


// FOR TESTING
slippy.hunger = 2
slippy.thirst = 2
slippy.sleep = 1
slippy.poop = 1
slippy.tankClean = 8


// // TURN OFF HORSE PET
// const thunder = new horsePet()
// thunder.hunger = randValue()
// thunder.thirst = randValue()
// thunder.sleep = randValue()
// thunder.poop = randValue()
// thunder.riding = randValue()
// thunder.grooming = randValue()



// Setup html buttons

    // set timer
const game = () => {
  
  console.log("\n*************** game loop *******************\n")
  
//   setTimeout(
        
//         () => {
      
          // ====  DISPLAY ATTRIBUTES AND GENERAL STATUS   =====
          // to HTML/CSS
          
          // to console
          // ----- snake -------
  
          console.log(`=== STATUS ===    low is good  -- high is bad`)
          console.log(slippy.hungerStatus())
          console.log(slippy.thirstStatus())
          console.log(slippy.sleepStatus())
          console.log(slippy.poopStatus())
          console.log(slippy.tankCleanStatus())
          
          // Snake General Status
  
          // // TEST - FORCING slippy.emotion
          // slippy.emotion = 5
  
          // SET average emotion up
          slippy.emotionSnake()
          
          // DISPLAY general showEmotion()
          console.log(`*** PHRASE ***\n${slippy.showEmotion().phrase}`)
          console.log(`*** EMOTICON *** \n${slippy.showEmotion().emoticon}`)
          console.log(`*** GifyURL ***\n${slippy.showEmotion().gifyUrl}`)
          
          
          // ------ horse -------
  // TURN OFF HORSE PET
          // console.log(thunder.groomingStatus())
          // console.log(thunder.ridingStatus())
          // console.log(thunder.hungerStatus())
          // console.log(thunder.thirstStatus())
          // console.log(thunder.sleepStatus())
          // console.log(thunder.poopStatus())
          
          // // horse General Status
  
          // // SET average emotion up
          // thunder.emotionHorse()
  
  // TURN OFF HORSE PET
          // console.log(`thunder.showEmotion().phrase          \n${thunder.showEmotion().phrase}`)
          // console.log(`thunder.showEmotion().emoticon        \n${thunder.showEmotion().emoticon}`)
          // console.log(`thunder.showEmotion().gifyUrl         \n${thunder.showEmotion().gifyUrl}`)
          
          // ====  MAKE WORSE OVER TIME
  
  // TURN OFF HORSE PET
          // // --- horse ----
          //   thunder.moreFood()
          //   thunder.moreDrink()
          //   thunder.morePoop()
          //   thunder.moreSleep()
          //   thunder.moreRiding()
          //   thunder.moreGrooming()
          
          // ---- snake ----
            slippy.moreFood()
            slippy.moreDrink()
            slippy.morePoop()
            slippy.moreSleep()
            slippy.moreTank()
          
          
          // ===  SIMULATING FOOD BUTTON PRESS ON SNAKE ONLY
           slippy.reduceHunger()
           slippy.reduceHunger()

            
      
      //   }, 2000
      // )
}



// const quit = () => {
//   // check quit button
  
//   // if pressed
//   //    change CSS/HTML
//   //    console.log("----quit---")
//   //    return true
  
//   return false  
// }


const main = () => {
  
  // console.clear()
  
  // do {game()}
  // while(quit() === false)
  console.log("******START GAME *****")
  
  // SIMULATE key presses and worsening attributes as a loop
    for(i = 0; i<8; i++){
          game()
    }
}

// //    after timer runs out change values
// //    check value levels and send messages to the DOM

// // -------
// // listen for button clicks pressed to increment values

main()










