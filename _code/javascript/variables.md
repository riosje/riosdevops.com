---
name: Javascript Variables
language: JAVASCRIPT
categories: [variables]
sections:
  code1:
      description: "Different types of variables"
      codeblock: |

        // This is a global variable and can be modified
        var a = 'a'

        // This is a block local-scoped variable and can't be changed
        const b = 'a'

        // This is local-scoped variable and can be modified
        let c = 'a'

        // Example overwriting a var value
        var a = 'a'
        console.log(a) //Outputs: "a"
        a='b'
        console.log(b) //Outputs: "b"
---
