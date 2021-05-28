const state = {
  first : '',
  second : '',
  operation : ''
}
const btn = document.querySelectorAll('.btn')
const operator = document.getElementById('operator')
const numDisplay = document.getElementById('numDisplay')
btn.forEach(b => {
  b.addEventListener('click',(ele)=>{
    const value = ele.target.value    
    if(isNumber(value) && state.operation.length == 0){
      if(value == '.' && checkDecimal(state.first)) return
      state.first = state.first + value
      numDisplay.textContent = state.first
    } 
    if(state.operation.length == 1 && isNumber(value)){
      if(value == '.' && checkDecimal(state.second)) return
      state.second = state.second + value
      numDisplay.textContent = state.second
    }    
    if(!isNumber(value)){
      if(value == 'AC'){
        state.first = ''
        state.second = ''
        state.operation = ''
        operator.textContent = ''
        numDisplay.textContent = ''
      } else if(state.second == '' && state.operation.length <= 1) {
        state.operation = value
        operator.textContent = value
      } else if(state.first !== '' && state.second !== '' && state.operation !== ''){      
        if(state.operation == '+'){          
          state.first = parseFloat(state.first) + parseFloat(state.second)
          state.first = state.first.toString()
          state.second = ''
          state.operation = value
          operator.textContent = value
          numDisplay.textContent = state.first
        } else if(state.operation == '-'){
          state.first = parseFloat(state.first) - parseFloat(state.second)
          state.first = state.first.toString()
          state.second = ''
          state.operation = value
          operator.textContent = value
          numDisplay.textContent = state.first
        } else if(state.operation == '*'){
          state.first = parseFloat(state.first) * parseFloat(state.second)
          state.first = state.first.toString()
          state.second = ''
          state.operation = value
          operator.textContent = value
          numDisplay.textContent = state.first
        } else if(state.operation == '/'){
          state.first = parseFloat(state.first) / parseFloat(state.second)
          state.first = state.first.toString()
          state.second = ''
          state.operation = value
          operator.textContent = value
          numDisplay.textContent = state.first
        } else if(state.operation == '='){
          state.first = state.second
          state.second = ''
          state.operation = value
          operator.textContent = value
        }
      }
    }      
    // console.log(state)
  })
})

function checkDecimal(digit){
  return digit.includes('.')
}

function isNumber(value){
  let arr = [1,2,3,4,5,6,7,8,9,0]
  for(let i of arr){
    if(i == parseInt(value)) return true
  }
  if(value == '.') return true
  return false
}