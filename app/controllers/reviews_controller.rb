class ReviewsController < ApplicationController
	

	def create
		#@hotel = Hotel.find(params[:id])
		@review = current_hotel.reviews.build(review_params)
		if @review.save
			flash[:success] = "Review added !"
			redirect_to root_url
		else
			render 'static/home'
		end
	end

	private

	def review_params
		params.require(:review).permit(:content)
	end
end
