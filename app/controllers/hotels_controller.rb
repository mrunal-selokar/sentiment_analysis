class HotelsController < ApplicationController

  def index
  	@hotels = Hotel.search(params[:search])
  end
  
  def show
  	@review = current_user.reviews.build if logged_in?
  	@hotel = Hotel.find(params[:id])
  	@reviews = @hotel.reviews.paginate(page: params[:page])
    @feed_items = @hotel.feed.paginate(page: params[:page])
  end

  def new
    @hotel = Hotel.new
  end

  def create
    @hotel = Hotel.new(hotel_params)
    @amenities = Amenity.column_names[1..8]
    @hotel.total_score = 0.0
    if @hotel.save
      flash[:success] = "New hotel added!"
      redirect_to hotels_path
    else
      flash[:danger] = "Fields can't be empty"
      redirect_to current_user
    end
  end

 private

    def hotel_params
      params.require(:hotel).permit(:name, :city)
    end

end
