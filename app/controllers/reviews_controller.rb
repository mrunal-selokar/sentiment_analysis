class ReviewsController < ApplicationController

	before_action :logged_in_user, only: [:create, :destroy]

	def create
		@review = current_user.reviews.build(review_params)
		if @review.save
			flash[:success] = "Review posted!"
			redirect_to root_url
		else
			render 'static/home'
		end
	end

	def destroy
	end

	private

	def review_params
		params.require(:review).permit(:content)
	end

end
