class CheckoutController < ApplicationController
  def index
    # @segment = {
    #   segment_id: params[:segment_id],
    #   start_date: params[:start_date],
    #   current_date: params[:current_date]
    # }.to_json
      
    @parking = {
      "status": {
        "garage_name": "350 Parnassus Garage",
      }
    }.to_json
  end
end