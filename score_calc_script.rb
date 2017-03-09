
reviews = Review.all
reviews.each do |review|
	hotel_id = review.hotel_id
	score = review.score
	hotel = Hotel.find(hotel_id)
	hotel.total_score += score
	hotel.save
end