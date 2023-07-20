let code:any = 123;//questa riga serve solo a confondere typescript per scopi didattici


//ora che ts è confuso utilizzo assertion type per correggere il tipo di dato
let employeeCode = <number> code;