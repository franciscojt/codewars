def duck_duck_goose(players, goose)

	0.upto(players.length) {|i| players[i] = {name: players[i]}}
	if players.length < goose
		return players[goose % players.length-1][:name]
	end
	players[goose-1][:name]
end

p duck_duck_goose(["a", "b", "c"], 100000)

