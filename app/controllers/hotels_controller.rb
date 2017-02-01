class HotelsController < ApplicationController
  def new
  end

  def index
  	@hotels = Hotel.all
  end
  def show
  	@review = current_user.reviews.build if logged_in?
  	@hotel = Hotel.find(params[:id])
  	#@reviews = @hotel.reviews.paginate(page: params[:page])
  end
end
