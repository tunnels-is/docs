# How to write docs

# Starting the server
```
$ hugo server -D
```

# Creating sub pages
### this creates a new directory
```
 hugo new docs/DIR/_index.md
 hugo new docs/DIR/DIR/_index.md
```
### this creates a new page
```
 hugo new docs/DIR/DIR/hello.md
```

# highlighting syntax

```go {linenos=table,hl_lines=[3,"5-7"],linenostart=199,anchorlinenos=true}
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
```


# Tags
### base services
- proxy
- public-vpn
- private-vpn
- vpn
- app
- controller
- honeypot
- api
- dns

### actions
- create
- update
- delete
- connect
- disconnect
- connections

### other
- settings
- logs
- socials 
