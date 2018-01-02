var access_token = "222401a7cf70954f1fa09d74d37e948ff1d48b3f";

// get user info
function getUserInfo(username){
	$.ajax({
		url: 'https://api.github.com/users/'+username,
		type: 'GET',
		success: function(data){
			var total_repos = data.public_repos;
			if(total_repos > 100){
				var tot_times_call = Math.floor(total_repos / 100) + 1,
					count = 0;

				while(count < tot_times_call){
					getUserRepos(username, count+1);
					count += 1;
				}

			}else{
				getUserRepos(username, 1);
			}
		},
		error: function(err){
			console.log(err);
		}
	})
}

// get total commit count for a repo
function getCommitStats(username, repo){
	$.ajax({
		url: 'https://api.github.com/repos/jsjaskaran/chatbot/stats/contributors',
		type: 'GET',
		success: function(data){
			console.log(data);
		},
		error: function(err){
			console.log(err);
		}
	})
}

var allRepos = [];
// get user repos, along with pagination
function getUserRepos(username, page){

	var url = 'https://api.github.com/users/'+username+'/repos?per_page=100&page='+page+'&access_token='+access_token;

	$.ajax({
		url: url,
		type: 'GET',
		success: function(data){
			console.log(data);
		},
		error: function(err){
			console.log(err);
		}
	})
}

$(document).ready(function(){
	$('#submit-gprofile').on('submit', function(e){
		e.preventDefault();
		var profile = $('#profileusername').val();
		if(profile === "" || profile === undefined){
			return false;
		}

		$(".search-demo5").addClass('search5--open');

		getUserInfo(profile);

	})
})