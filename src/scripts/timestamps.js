document.addEventListener('DOMContentLoaded', () => 
{
    const dateOfBirth = 2003;
    const currentYear = new Date().getFullYear()
    const age = currentYear - dateOfBirth;
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span');

    // "About me" age number
    textElements.forEach(element => 
    {
        if (element.textContent.includes('{YEAR}'))
        {
            // Use replaceAll to fix multiple instances inside a single block
            element.innerHTML = element.innerHTML.replaceAll('{YEAR}', currentYear);
        }
        else if (element.textContent.includes('{AGE}'))
        {
            element.innerHTML = element.innerHTML.replaceAll('{AGE}', age);
        }
    })
})