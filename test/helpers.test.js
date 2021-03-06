const { test } = require('picomatch')
const helpers = require('../helpers')

describe ('helper functions', () => { 

    describe('item helpers', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = '<section id="section"><p id = "paraOne">Donec consectetur ligula libero, in rhoncus mi malesuada non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae convallis risus, at commodo neque. Proin sollicitudin lobortis pellentesque. Pellentesque ut suscipit erat. Aenean vitae tincidunt nisl. Sed in viverra risus. In sit amet mi arcu. Quisque ornare suscipit diam, id imperdiet diam. Donec vel blandit orci, sed rutrum velit. Duis tincidunt laoreet tellus id volutpat.</p></section>'
            global.section = document.querySelector('#section');
        })

    it('new paragraph is added', () => {
    helpers.keyPress('e');
    expect(section.querySelectorAll('p').length).toBe(2);

    })
    
    it('new paragraph is added', () => {
        helpers.keyPress('e');
        expect(section.querySelectorAll('p')[1].innerContent).toBe('e');

})
})
})