class ReviewsController < ApplicationController

	before_action :logged_in_user, only: [:create, :destroy]

	def create
		@review = current_user.reviews.build(review_params)
		if @review.save
			hotel = Hotel.find(params[:review][:hotel_id])
			flash[:success] = "Review posted!"
			if params[:controller] == "hotel"
				redirect_to hotel_path(hotel)
			else
				redirect_to user_path(current_user)
			end
		else
			render 'static/home'
		end
	
	end

	def destroy
	end

	private

	def review_params
		params.require(:review).permit(:content, :hotel_id)
	end

end

