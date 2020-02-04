class ComplaintsController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.js
    end
  end

  def search
    if params[:address] 
      @coordinates = (Geocoder.search(params[:address])).first.coordinates
      respond_to do |format|
        format.js
      end
    end
  end
end
