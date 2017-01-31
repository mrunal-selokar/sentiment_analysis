require 'csv'

fields = %w{name city}

CSV.foreach("/home/mrunal/hotels.csv",headers: true) do |row|
	rows = row.to_hash
	a = Hotel.new(rows)
	a.save
end
