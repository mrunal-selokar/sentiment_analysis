require 'test_helper'

class HotelTest < ActiveSupport::TestCase
	def setup
		@hotel = Hotel.new(name: "example hotel", city: "example city")
	end

	test "should be valid" do
		assert @hotel.valid?
	end

	test "name should be present" do
		@hotel.name = "  "
		assert_not @hotel.valid?
	end

	test "name should not be too long" do
		@hotel.name = "a"*101
		assert_not @hotel.valid?
	end

	test "city should be present" do
		@hotel.city = "  "
		assert_not @hotel.valid?
	end

	test "city should not be too long" do
		@hotel.city = "a"*51
		assert_not @hotel.valid?
	end	
end
