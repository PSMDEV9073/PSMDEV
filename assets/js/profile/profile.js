let xhttp_profile= new XMLHttpRequest();
xhttp_profile.onreadystatechange = function () {
	if(xhttp_profile.readyState == 4 && xhttp_profile.status == 200){
		jsonfunc_profile(this.responseText); //this = xhttp_profile
//		jsonfunc_profile(xhttp_profile.responseText); // 둘다 가능
	}
}
xhttp_profile.open("GET","../assets/json/aboutme.json", true);
xhttp_profile.send();

function jsonfunc_profile( jsonText_profile ) {

	let json_profile = JSON.parse(jsonText_profile);

	for(i=0; i<json_profile.length; i++){
            let My_Name = json_profile[i].My_Name;
            let My_StudentId = json_profile[i].My_StudentId;
            let My_Image = json_profile[i].My_Image;
            let My_Age = json_profile[i].My_Age;
            let My_Mbti = json_profile[i].My_Mbti;
            let My_Sns = json_profile[i].My_Sns;
            let My_Aboutme = json_profile[i].My_Aboutme;
            let My_Tmi = json_profile[i].My_Tmi;
            let My_Spec = json_profile[i].My_Spec;

            $(".profile-image").attr("href", `${My_Image}`);

            $(".profile-my-name").html(`이름: ${My_Name}`);
            $(".profile-my-age").html(`나이: ${My_Age}`);
            $(".profile-my-studentid").html(`학번: ${My_StudentId}`);
            $(".profile-my-mbti").html(`MBTI: ${My_Mbti}`);
            $(".profile-my-sns").html(`SNS: ${My_Sns}`);

            $(".profile-aboutme").html(`${My_Aboutme}`);

            $(".profile-tmi").html(`${My_Tmi}`);
            $(".profile-spec").html(`${My_Spec}`);
	}
}