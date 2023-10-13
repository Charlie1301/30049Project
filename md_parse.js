line_string = ""

fullSummary_array = []
fullPosition_array = []

instance_array = []
error_array = []

while (True) {

    // line = readline + remove whitespace

    if (line == "Summary") {

        while (True) {

            // line = readline + remove whitespace

            if (line.length > 2) {

                if (line.substring(0,2) == " - ") {

                    fullSummary_array.push(line)

                } else {

                    break

                }

            }
        
        }

    }

}

while (True) {

    // line = readline + remove whitespace

    if (filename == line.substring(0, filename.length)) {

        fullPosition_array.push(line.substring(filename.length + 1).split("-"))

    }

    // if end of file, break and close file

}

fullSummary_array.forEach(summary_line => {

    // error_name = grab x where "[x]"

    split_line = summary_line.split(" ")

    // num_results = grab x where "(x "

    error_impact = split_line[2].substring(1,split_line[2].length - 2)


    for (let i = 0; 1 < num_results; i++) {

        instance_array.push([null, error_name])

    }

    error_array.push([error_name, error_impact])

}) 

fullPosition_array.forEach((element, index) => {

    instance_array[index][0] = element

})





    