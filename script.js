var colors=[
    'blue',
    'black',
    'red',
    'white',
    'green',
    'orange',
    'skyblue',
    'yellow',
    '#92B4EC',
    '#F9CEEE',
    '#125B50',
    '#F8B400',
    '#FF6363',
    '#05595B',
    '#24A19C',
    '#1C6DD0',
    '#161853',
    '#FF7800',
    '#A084CF',
    '#1363DF',
    '#9EB23B',
    '#CDF0EA',
    '#BDF2D5',
    '#F5DF99',
    '#53BF9D',


];
function changeColor(){
    document.getElementById('name1').remove();
    var randomnum=Math.floor((Math.random()*colors.length));
    var colour=colors[randomnum];
    var h1=document.createElement('h1');
    h1.setAttribute('id','name1');
    var text=document.createTextNode("background-colour: "+colour);
    h1.appendChild(text);
    var k=document.getElementById('total');
    k.style.backgroundColor=colour;
    document.getElementById('name').appendChild(h1);
    
    
}