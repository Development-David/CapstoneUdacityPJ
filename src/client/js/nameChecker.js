function checkForName(inputText) {
        let url;
        try {
          url = new URL(inputText);
        } catch (_) {
            // alert('Please insert a valid URL!')
          return false;  
        }
        return inputText;
      
}

export { checkForName }
