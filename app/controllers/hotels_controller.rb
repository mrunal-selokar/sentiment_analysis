class HotelsController < ApplicationController
  def new
  end

  def index
  	@hotels = Hotel.all
  end
  def show
  	@hotel = Hotel.find(params[:id])
  end
end
