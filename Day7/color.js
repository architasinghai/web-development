var colors = ['#16a885', '#27ae68', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6','#FB6964', '#342224', '#472e32']

function changeColor()
{
    var num = Math.floor(Math.random()*(colors.length))
    document.getElementById('target').style.backgroundColor = colors[num];
}