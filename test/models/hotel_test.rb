require 'test_helper'

class HotelTest < ActiveSupport::TestCase
	def setup
		@hotel = Hotel.new(name: "example hotel")
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
end
