require 'csv'

fields = %w{content hotel_id user_id}

CSV.foreach("/home/mrunal/reviews.csv",headers: true) do |row|
	rows = row.to_hash
	a = Review.new(rows)
	a.save
end
