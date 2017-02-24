class ReviewsController < ApplicationController

	before_action :logged_in_user, only: [:create]

	def create
		@review = current_user.reviews.build(review_params)
		hotel = Hotel.find(params[:review][:hotel_id])
		if @review.save
			flash[:success] = "Review posted!"
			if params[:review][:controller] == 'hotels'
				redirect_to hotel_path(hotel)
			else
				redirect_to user_path(current_user)
			end
		else
			
      		flash[:danger] = "Fields can't be empty"
      		if params[:review][:controller] == 'hotels'
				redirect_to hotel_path(hotel)
			else
				redirect_to user_path(current_user)
			end
		end
	
	end

	private

	def review_params
		params.require(:review).permit(:content, :hotel_id)
	end
end