
	$analyze = Sentimental.new
	$analyze.load_defaults

reviews = Review.all
reviews.each do |review|
	#hotel_id = review.hotel_id
	score =  $analyze.score(review.content) 
	review.score = score
	review.save
end