async function submitAttendance(){

    const data = {

        student_name:
            document.getElementById("name").value,

        course:
            document.getElementById("course").value,

        status:
            document.getElementById("status").value
    };

    try{

        const response = await fetch(

            "https://jzcvefams1.execute-api.eu-north-1.amazonaws.com/prod",

            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(data)
            }
        );

        const result = await response.json();

        console.log(result);

        document.getElementById("result").innerHTML =
            result.message || result.error;

    }

    catch(error){

        console.log(error);

        document.getElementById("result").innerHTML =
            "Request Failed";
    }
}