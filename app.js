const Square = (props) => {
    const bgColor = props['bgColor'];
    const txtColor = props['txtColor'];
    return React.createElement('h1', 
        {
            style: { backgroundColor: bgColor, color: txtColor },
            className: 'pb-5'
        }, txtColor +' on '+ bgColor);
};

ReactDOM.render(React.createElement('div', {className: 'row p-3'},
    [
        React.createElement('div', { className: 'col text-center px-0' },
        Square({ bgColor: 'blue', txtColor: 'white' })),
        React.createElement('div', { className: 'col text-center px-0' },
        Square({ bgColor: 'red', txtColor: 'blue' })),
        React.createElement('div', { className: 'col text-center px-0' },
        Square({ bgColor: 'pink', txtColor: 'green' })),
    ]), document.getElementById('app'));